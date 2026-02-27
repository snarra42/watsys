import { Shield, Target, Lightbulb, TrendingUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="slide-up">
                        <h1 className="page-title text-gradient">About Us</h1>
                        <p className="page-subtitle">Expertise rooted in sustainable water engineering since 2018.</p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section about-intro">
                <div className="container intro-container">
                    <div className="intro-text">
                        <h2>Who We Are</h2>
                        <p>
                            WATSYS Consulting Engineers Private Limited was incorporated in 2018 under the Companies Act, 2013. We are a specialised engineering and consulting service provider focused on Water Supply Systems, Under Ground Drainage (UGD) Systems, and Non-Revenue Water/ Un-Accounted for Water (NRW/UFW) Reduction. With extensive experience in urban and rural infrastructure development, we deliver reliable, sustainable, and technically strong solutions for government and private clients. With 105+ successfully completed projects across Karnataka state, we bring proven expertise in design, planning, hydraulic modelling, project documentation, and implementation support.
                        </p>
                        <div className="corporate-details" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                            <p><strong>CIN:</strong> U74999KA2018PTC119278</p>
                            <p><strong>GST No:</strong> 29AACCW3301M1Z7</p>
                            <p><strong>PAN No:</strong> AACCW3301M</p>
                        </div>
                        <p>
                            We possess proven expertise in Underground Drainage (UGD) systems, covering feasibility studies, detailed engineering, network design, and asset evaluation. Our work integrates technical, operational, and financial considerations to ensure efficient wastewater collection and conveyance systems that are reliable, cost-effective, and aligned with applicable standards and best practices. In addition, we undertake comprehensive customer surveys and field investigations, generating accurate consumer-level datasets essential for planning, design billing, NRW reduction, and service optimization. Our capabilities also include DGPS based road and topographical surveys, providing precise ground-level data to support infrastructure design, alignment planning, and utility mapping. By combining robust field data with strong analytical expertise, we deliver practical, data-driven solutions that support informed decision-making and successful project outcomes.
                        </p>
                        <p style={{ marginTop: '1.5rem' }}>
                            Our Company is supported by a highly qualified and multidisciplinary team of professionals with extensive experience in water supply and wastewater infrastructure projects. The team comprises senior water supply engineers, hydraulic and network design specialists, UGD and wastewater experts, GIS and survey professionals, project planners, and financial and data analysts. With collective exposure to more than 100 projects across urban and rural settings, the team has proven expertise in feasibility studies, DPR preparation, hydraulic modelling, NRW reduction, continuous (24x7) water supply systems, sewerage and UGD planning, and implementation support. The team operates with a strong emphasis on international best practices, quality assurance, regulatory compliance, and client-focused delivery, ensuring technically robust, sustainable, and operation-friendly solutions across the entire project lifecycle.
                        </p>
                    </div>

                    <div className="intro-images-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="image-card" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(11, 61, 145, 0.15)' }}>
                            <img src="/src/assets/new-project-photo-4.jpeg" alt="Providing Clean Water Access" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                        <div className="image-card" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(11, 61, 145, 0.15)' }}>
                            <img src="/src/assets/water-treatment-plant.jpeg" alt="Water Treatment Plant" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                        <div className="image-card" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(11, 61, 145, 0.15)' }}>
                            <img src="/about-team.png" alt="WATSYS Engineering Team Collaboration" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>

                </div>
            </section>

            <section className="section mission-vision bg-alt">
                <div className="container">
                    <div className="mv-grid">
                        <AnimatedSection animation="slide-left" delay={100} className="mv-card hover-float">
                            <Target size={48} className="mv-icon pulse-soft" />
                            <h3>Our Mission</h3>
                            <p>
                                To provide innovative, cost-effective, and robust engineering consultancy services that empower utilities to deliver safe, reliable, and equitable water and sanitation services to communities.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection animation="slide-right" delay={200} className="mv-card hover-float">
                            <Lightbulb size={48} className="mv-icon pulse-soft" />
                            <h3>Our Vision</h3>
                            <p>
                                To be the premier engineering consultancy globally recognized for pioneering data-driven solutions in Non-Revenue Water reduction and intelligent water network design.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Core Competencies */}
            <section className="section core-competencies">
                <div className="container">
                    <AnimatedSection animation="slide-up">
                        <h2 className="section-title text-center">Core Competencies</h2>
                    </AnimatedSection>
                    <div className="competencies-grid">
                        <AnimatedSection animation="fade-in" delay={100} className="competency-item hover-float">
                            <Shield className="comp-icon pulse-soft" size={32} />
                            <h4>Infrastructure Specialization</h4>
                            <p>Deep-dive expertise in large-scale DPR formulation, bid process management, and construction supervision for mega water projects.</p>
                        </AnimatedSection>
                        <AnimatedSection animation="fade-in" delay={200} className="competency-item hover-float">
                            <TrendingUp className="comp-icon pulse-soft" size={32} />
                            <h4>NRW mastery</h4>
                            <p>End-to-end UFW reduction strategies including water auditing, DMA zoning, and acoustic leak detection methodologies.</p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
