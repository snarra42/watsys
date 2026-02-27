import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpeg';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Team', path: '/team' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">

                {/* Brand */}
                <Link to="/" className="brand">
                    <img src={logo} alt="WATSYS Logo" className="brand-logo" />

                    <div className="brand-text">
                        <div className="brand-name">WATSYS</div>
                        <div className="brand-subtitle">
                            Consulting Engineers
                        </div>
                    </div>
                </Link>

                {/* Navigation */}
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        to="/contact"
                        className="btn btn-primary nav-btn"
                        onClick={() => setIsOpen(false)}
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>
        </header>
    );
};

export default Navbar;