import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Team from './pages/Team';
import Contact from './pages/Contact';

import WaterBubbles from './components/WaterBubbles';
import ScrollToTop from './components/ScrollToTop';
import ChatbotWidget from './components/ChatbotWidget';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-container">
                <WaterBubbles />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />

                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:id" element={<ProjectDetails />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
                <ChatbotWidget />
            </div>
        </Router>
    );
}

export default App;
