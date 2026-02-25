import { MapPin, Phone, Mail } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="slide-up">
                        <h1 className="page-title text-gradient">Contact WATSYS</h1>
                        <p className="page-subtitle">Start a conversation with our infrastructure planning experts.</p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section contact-section">
                <div className="container">
                    <div className="contact-layout-centered">

                        <AnimatedSection animation="fade-in" className="contact-info-centered">
                            <h2 className="text-center">Get in Touch</h2>
                            <p className="contact-intro text-center">
                                Whether you need a comprehensive DPR, hydraulic modeling analysis, or field surveys for an upcoming water infrastructure project, our team is ready to assist you.
                            </p>

                            <div className="info-cards-grid">
                                <AnimatedSection animation="slide-up" delay={100} className="info-card hover-float">
                                    <div className="info-icon-wrapper pulse-soft">
                                        <MapPin size={32} />
                                    </div>
                                    <h3>Our Offices</h3>
                                    <p>
                                        <strong>Bangalore (HQ):</strong><br />
                                        <a href="https://maps.app.goo.gl/search/1232,+15th+Main+Road,+BTM+2nd+Stage,+Bangalore,+Karnataka,+India+-+560076" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            1232, 15th Main Road, BTM 2nd Stage, Bangalore - 560076
                                        </a>
                                        <br /><br />
                                        <strong>Registered:</strong><br />
                                        #8, 3rd Cross, Garudachar Layout, Vijayanagar 3rd Stage, Mysuru - 570017
                                    </p>
                                </AnimatedSection>

                                <AnimatedSection animation="slide-up" delay={200} className="info-card hover-float">
                                    <div className="info-icon-wrapper pulse-soft">
                                        <Phone size={32} />
                                    </div>
                                    <h3>Direct Contact</h3>
                                    <p>
                                        <strong>Shrivatsa Thilakprasad</strong><br />Director<br />
                                        <a href="tel:+919164004600" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>+91-80-3597-9407</a>
                                        <br /><br />

                                    </p>
                                </AnimatedSection>

                                <AnimatedSection animation="slide-up" delay={300} className="info-card hover-float">
                                    <div className="info-icon-wrapper pulse-soft">
                                        <Mail size={32} />
                                    </div>
                                    <h3>Email & Web</h3>
                                    <p>
                                        <a href="mailto:info@watsysconsulting.com" style={{ textDecoration: 'none', color: 'inherit' }}>info@watsysconsulting.com</a><br />
                                        <a href="mailto:shrivatsa@watsysconsulting.com" style={{ textDecoration: 'none', color: 'inherit' }}>shrivatsa@watsysconsulting.com</a>
                                    </p>
                                </AnimatedSection>
                            </div>

                            {/* Google Maps Embed */}
                            <AnimatedSection animation="fade-in" delay={400} className="map-container">
                                <div style={{ marginTop: '8rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                    <iframe
                                        src="https://www.google.com/maps?q=1232,+15th+Main+Road,+BTM+2nd+Stage,+Bangalore,+Karnataka+560076&output=embed"
                                        width="100%"
                                        height="450"
                                        style={{ border: 0, display: 'block' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="WATSYS Bangalore Office Map"
                                    ></iframe>
                                </div>
                            </AnimatedSection>

                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
