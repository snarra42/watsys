import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import './ChatbotWidget.css';

const WEBHOOK_URL = 'https://himmmm.app.n8n.cloud/webhook/13be5650-84a8-427f-9e5c-5f7d879fbf23/chat';

const ChatbotWidget = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello 👋", sender: 'bot' },
        { id: 2, text: "Welcome to WATSYS Consulting Engineers. How can we assist you today?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = useRef(null);

    // ✅ Persistent sessionId for n8n memory
    const getSessionId = () => {
        let sessionId = localStorage.getItem("n8n-session-id");
        if (!sessionId) {
            sessionId = crypto.randomUUID();
            localStorage.setItem("n8n-session-id", sessionId);
        }
        return sessionId;
    };

    const toggleChat = () => setIsOpen(prev => !prev);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userText = inputValue;

        const userMsg = {
            id: Date.now(),
            text: userText,
            sender: 'user'
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        try {
            const sessionId = getSessionId();

            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: "sendMessage",
                    sessionId: sessionId,
                    chatInput: userText
                })
            });

            if (!response.ok) throw new Error("Server error");

            const data = await response.json();
            console.log("n8n response:", data);

            // ✅ Parse n8n response properly
            let botReply = "I'm here to assist you.";
            if (data?.output) {
                botReply = data.output;
            } else if (Array.isArray(data) && data[0]?.output) {
                botReply = data[0].output;
            } else if (data?.text) {
                botReply = data.text;
            }

            const botMsg = {
                id: Date.now() + 1,
                text: botReply,
                sender: 'bot'
            };

            setMessages(prev => [...prev, botMsg]);

        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, {
                id: Date.now(),
                text: "Connection error. Please try again.",
                sender: 'bot'
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="chatbot-widget-container">

            {/* Chat Window */}
            {isOpen && (
                <div className="chatbot-window">
                    {/* Header */}
                    <div className="chatbot-header">
                        <div className="chatbot-header-info">
                            <div className="chatbot-avatar">
                                <Bot size={20} />
                            </div>
                            <div>
                                <h4>WATSYS Assistant</h4>
                                <span>Engineering Consultancy Support</span>
                            </div>
                        </div>
                        <button onClick={toggleChat} className="chatbot-close-btn" aria-label="Close Chat">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Body */}
                    <div className="chatbot-body">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`chat-message ${msg.sender === 'bot' ? 'bot-message' : 'user-message'}`}>
                                {msg.text}
                            </div>
                        ))}

                        {isTyping && (
                            <div className="chat-message bot-message typing-indicator-container">
                                <div className="typing-indicator">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Footer */}
                    <form className="chatbot-footer" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="chat-input"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className="chat-send-btn" disabled={!inputValue.trim()}>
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}

            {/* Floating Action Buttons */}
            <div className="floating-buttons-group">
                <button
                    className={`floating-btn chatbot-toggle-btn ${isOpen ? 'open' : ''}`}
                    onClick={toggleChat}
                    aria-label="Toggle Chat"
                >
                    {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
                </button>

                <a
                    href="https://wa.me/919164004600?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20engineering%20consultancy%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="floating-btn wa-floating-btn"
                    aria-label="Contact on WhatsApp"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ChatbotWidget;
