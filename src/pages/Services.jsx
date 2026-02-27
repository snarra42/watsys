import * as Icons from 'lucide-react';
import { services } from '../data/services';
import AnimatedSection from '../components/AnimatedSection';
import './Services.css';
import customerSurveyField from '../assets/customer_survey_field.png';
import gisNetworkMap from '../assets/gis_network_map.png';
import realTopo1 from '../assets/new-topo-1.jpeg';
import realTopo2 from '../assets/new-topo-2.jpeg';
import realTopo3 from '../assets/new-topo-3.jpeg';
import realTopo4 from '../assets/new-topo-4.jpeg';
import realTopo5 from '../assets/new-topo-5.jpeg';
import realTopo6 from '../assets/new-topo-6.jpeg';
import realTopo7 from '../assets/new-topo-7.jpeg';
import realTopo8 from '../assets/new-topo-8.jpeg';
import realTopo9 from '../assets/new-topo-9.jpeg';
import realTopo10 from '../assets/new-topo-10.jpeg';
import realTopo11 from '../assets/new-topo-11.jpeg';
import realTopo12 from '../assets/new-topo-12.jpeg';
import realTopo13 from '../assets/new-topo-13.jpeg';
import realTopo14 from '../assets/new-topo-14.jpeg';

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

            <section className="section survey-content-section" style={{ paddingBottom: '2rem' }}>
                <div className="container">
                    <AnimatedSection animation="fade-in" className="survey-text-box">
                        <h2 style={{ background: '#0A2540', color: 'white', display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '4px', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Customer Survey</h2>
                        <p>
                            With extensive experience in executing House Service Connection Survey (Consumer Surveys) for water supply & UGD projects, our team conducts detailed house-to-house assessments to generate accurate and multiple urban and rural water supply assignments, we have successfully mapped lakhs of consumer connections, verified service lines, assessed meter conditions, recorded consumption patterns, and captured supply timings and service feedback. Each consumer is geo-tagged and integrated into a GIS-based network map, enabling utilities to clearly identify unauthorized connections, low-pressure areas, leakage-prone zones, and billing gaps. Our proven methodology and technology ensures high-quality datasets that support hydraulic modelling, NRW/UFW reduction strategies, and realistic demand estimation. This depth of experience allows us to deliver reliable, transparent, and customer-focused insights that strengthen the overall planning and execution of water supply improvement projects.
                        </p>
                        <p>
                            The Customer Survey forms a critical component of both water supply and UGD projects. With extensive experience in conducting customer surveys, we generate accurate field-level data essential for planning, design, and NRW reduction in water supply systems, as well as for and capacity planning in UGD schemes. By developing an authentic and comprehensive consumer-level dataset, our surveys support demand assessment, hydraulic modelling, and the implementation of transparent, efficient, and customer-oriented water supply
                        </p>
                    </AnimatedSection>

                    <div className="customer-survey-images" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                        <img src={customerSurveyField} alt="Customer Survey Field" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', aspectRatio: '4/3', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                        <img src={gisNetworkMap} alt="GIS Network Map" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', aspectRatio: '4/3', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                    </div>
                </div>
            </section>

            <section className="section survey-content-section bg-alt-box" style={{ margin: '0', borderRadius: '0', border: 'none', background: '#eef6fc' }}>
                <div className="container">
                    <AnimatedSection animation="fade-in" className="survey-text-box" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ background: '#0A2540', color: 'white', display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '4px', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Topographical and Road Survey</h2>
                        <p>
                            Our team brings strong technical expertise and extensive field experience in conducting Road Surveys for water supply infrastructure projects. We carry out precise measurements of road widths, centreline profiles, pavement layers, gradients, and existing utility crossings using advanced surveying instruments. The collected data is integrated into GIS-based corridor maps to identify alignment constraints, optimize trench locations, and plan safe crossings with telecom, electrical, drainage, and other underground utilities. This survey output supports accurate pipeline routing, excavation planning, and reinstatement design in compliance with road authority standards. With a proven record across diverse urban and rural environments, we ensure that every water supply project is supported by reliable, field-verified road data, facilitating smooth execution and minimizing public disruption.
                        </p>
                    </AnimatedSection>

                    {/* Grid for Topographical Survey Images */}
                    <div className="customer-survey-images topo-survey-images" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                        {[realTopo1, realTopo2, realTopo3, realTopo4, realTopo5, realTopo6, realTopo7, realTopo8, realTopo9, realTopo10, realTopo11, realTopo12, realTopo13, realTopo14].map((src, idx) => (
                            <img key={idx} src={src} alt={`Topographical Survey Location ${idx + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
