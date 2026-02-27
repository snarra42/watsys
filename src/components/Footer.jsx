import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';
import logo from '../assets/logo.jpeg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="container footer-container">

                {/* Brand Column */}
                <div className="footer-col brand-col">

                    <Link to="/" className="footer-brand">
                        <img
                            src={logo}
                            alt="WATSYS Logo"
                            className="footer-logo"
                        />

                        <div className="footer-brand-text">
                            <div className="footer-brand-name">WATSYS</div>
                            <div className="footer-brand-name">
                                Consulting Engineers Pvt. Ltd.
                            </div>
                        </div>
                    </Link>

                    <p className="footer-desc">
                        Specialized engineering consultancy in Water Supply Systems,
                        Underground Drainage (UGD), and Non-Revenue Water (NRW/UFW) reduction.
                    </p>

                </div>

                {/* Quick Links */}
                <div className="footer-col links-col">

                    <h3>Quick Links</h3>

                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Our Services</Link></li>
                        <li><Link to="/projects">Project Portfolio</Link></li>
                        <li><Link to="/team">Engineering Team</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>

                </div>

                {/* Services */}
                <div className="footer-col services-col">

                    <h3>Key Services</h3>

                    <ul>
                        <li><Link to="/services#water-supply">Water Supply Systems</Link></li>
                        <li><Link to="/services#ugd-sewer">Underground Drainage</Link></li>
                        <li><Link to="/services#nrw-reduction">NRW/UFW Reduction</Link></li>
                        <li><Link to="/services#hydraulic-modeling">Hydraulic Modeling</Link></li>
                        <li><Link to="/services#gis-survey">GIS Mapping & Survey Services</Link></li>
                    </ul>

                </div>

                {/* Contact */}
                <div className="footer-col contact-col">

                    <h3>Contact Details</h3>

                    {/* Address */}
                    <div className="contact-item">
                        <MapPin size={20} className="contact-icon" />
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=1232,+15th+Main+Road,+BTM+2nd+Stage,+Bangalore,+Karnataka+-+560076"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            1232, 15th Main Road, BTM 2nd Stage,
                            Bangalore, Karnataka - 560076
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="contact-item">
                        <Phone size={20} className="contact-icon" />
                        <div className="contact-phones">
                            <a href="tel:+918035979407" className="contact-link">
                                +91 8035979407
                            </a>
                            <a href="tel:+919164004600" className="contact-link">
                                +91 9164004600
                            </a>
                            <a href="tel:+917829607809" className="contact-link">
                                +91 7829607809
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="contact-item">
                        <Mail size={20} className="contact-icon" />
                        <a
                            href="mailto:info@watsysconsulting.com?subject=Engineering Consultancy Inquiry&body=Hello Watsys Consulting Engineers,"
                            className="contact-link"
                        >
                            info@watsysconsulting.com
                        </a>
                    </div>

                </div>

            </div>

            {/* Bottom Footer */}
            <div className="footer-bottom">

                <div className="container bottom-container">

                    <p>
                        &copy; {currentYear} WATSYS Consulting Engineers Private Limited.
                        All Rights Reserved.
                    </p>

                    <div className="footer-legal">
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Terms of Service</Link>
                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;