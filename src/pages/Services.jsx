import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { services } from '../data/services';
import AnimatedSection from '../components/AnimatedSection';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="slide-up">
                        <h1 className="page-title text-gradient">Our Consultancy Services</h1>
                        <p className="page-subtitle">Comprehensive engineering solutions for critical water infrastructure.</p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section services-details">
                <div className="container">
                    {services.map((service, index) => {
                        const IconComponent = Icons[service.icon];
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`service-detail-row ${!isEven ? 'row-reverse' : ''}`}
                            >
                                <AnimatedSection animation={!isEven ? "slide-right" : "slide-left"} delay={100} className="service-content-col">
                                    <div className="service-title-wrap">
                                        <div className="icon-badge">
                                            {IconComponent && <IconComponent size={28} />}
                                        </div>
                                        <h2>{service.title}</h2>
                                    </div>
                                    <p className="service-long-desc">{service.description}</p>

                                    <div className="service-meta-grid">
                                        <div className="meta-block">
                                            <h3>Core Process</h3>
                                            <ul className="process-list">
                                                {service.process.map((step, i) => (
                                                    <li key={i}>
                                                        <Icons.CheckCircle2 size={16} className="text-primary" />
                                                        {step}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="meta-block">
                                            <h3>Key Benefits</h3>
                                            <ul className="benefits-list">
                                                {service.benefits.map((benefit, i) => (
                                                    <li key={i}>
                                                        <Icons.TrendingUp size={16} className="text-secondary" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    {service.id === 'gis-survey' && (
                                        <Link to="/surveys" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
                                            Explore our Surveys
                                        </Link>
                                    )}
                                </AnimatedSection>
                                <AnimatedSection animation="fade-in" delay={300} className="service-visual-col hover-float">
                                    <div className="service-image-wrapper">
                                        <img src={service.image} alt={`${service.title} Illustration`} className="service-image" />
                                    </div>
                                    {service.realImage && (
                                        <div className="service-image-wrapper">
                                            <img src={service.realImage} alt={`${service.title} Project Sight`} className="service-image" style={{ borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                                        </div>
                                    )}
                                </AnimatedSection>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Services;
