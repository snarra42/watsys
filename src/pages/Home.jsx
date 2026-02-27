import { Link } from 'react-router-dom';
import { ChevronRight, Award, Users, HardHat, Building2 } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { services } from '../data/services';
import { projects } from '../data/projects';
import './Home.css';

const Home = () => {
    const featuredServices = services.slice(0, 3);
    const featuredProjects = projects.slice(0, 3);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background"></div>
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Engineering Sustainable
                            <span className="text-highlight"> Water Infrastructure</span> Solutions
                        </h1>
                        <p className="hero-subtitle">
                            Specialized consultancy in Water Supply Systems, Underground Drainage, and Non-Revenue Water (NRW) Reduction for a sustainable future.
                        </p>
                        <div className="hero-actions">
                            <Link to="/services" className="btn btn-primary btn-lg">
                                View Services
                            </Link>
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Overview Summary */}
            <section className="section overview-section">
                <div className="container">
                    <div className="overview-content">
                        <div className="overview-text">
                            <h2 className="section-title text-left">Trusted Infrastructure Partners</h2>
                            <p className="lead-text">
                                WATSYS Consulting Engineers Private Limited provides holistic engineering solutions tailored for complex urban and rural water networks.
                            </p>
                            <p>
                                Founded on the principles of engineering excellence and data-driven design, our multi-disciplinary team delivers robust Detailed Project Reports (DPRs), hydraulic modeling, and GIS-integrated surveys. We bridge the gap between concept and fully operational infrastructure, partnering seamlessly with government bodies, municipalities, and smart city corporations.
                            </p>
                            <Link to="/about" className="btn-link">
                                More About Our Company <ChevronRight size={18} />
                            </Link>
                        </div>

                        <div className="overview-stats">
                            <div className="stat-card">
                                <span className="stat-number">105+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>

                            <div className="stat-card">
                                <span className="stat-number">25+</span>
                                <span className="stat-label">Engineering Experts</span>
                            </div>

                            <div className="stat-card">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">States Covered</span>
                            </div>

                            <div className="stat-card">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">Clients</span>
                            </div>

                            {/* NEW STAT ADDED */}
                            <div className="stat-card">
                                <span className="stat-number">1M+</span>
                                <span className="stat-label">Customers surveyed</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Key Services Section */}
            <section className="section services-section bg-alt">
                <div className="container">
                    <h2 className="section-title">Core Engineering Expertise</h2>
                    <p className="section-subtitle">
                        Delivering precision engineering and comprehensive consultancy across the water sector spectrum.
                    </p>
                    <div className="services-grid">
                        {featuredServices.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/services" className="btn btn-primary">
                            Explore All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section why-us-section">
                <div className="container">
                    <h2 className="section-title">Why Partner With WATSYS</h2>
                    <div className="why-us-grid">
                        <div className="reason-item">
                            <Award className="reason-icon" size={40} />
                            <h3>Specialized Infrastructure Consultancy</h3>
                            <p>Focused exclusively on large-scale water and wastewater sector projects, ensuring deep domain expertise.</p>
                        </div>

                        <div className="reason-item">
                            <Building2 className="reason-icon" size={40} />
                            <h3>Government Project Experience</h3>
                            <p>Extensive track record navigating complex approval processes with municipal and state-level government bodies.</p>
                        </div>

                        <div className="reason-item">
                            <Users className="reason-icon" size={40} />
                            <h3>Expert Engineering Team</h3>
                            <p>A diverse talent pool of hydraulic modelers, structural designers, GIS analysts, and survey specialists.</p>
                        </div>

                        <div className="reason-item">
                            <HardHat className="reason-icon" size={40} />
                            <h3>Data-Driven Engineering</h3>
                            <p>Leveraging high-fidelity baseline data through our in-house DGPS and topographic survey teams.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="section projects-section bg-alt">
                <div className="container">
                    <h2 className="section-title">Featured Portfolios</h2>
                    <p className="section-subtitle">
                        A glimpse into some of our landmark engineering design and consultancy projects.
                    </p>
                    <div className="projects-grid">
                        {featuredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/projects" className="btn btn-primary">
                            View All 105+ Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <div className="container text-center cta-content">
                    <h2>Ready to Initiate Your Next Infrastructure Project?</h2>
                    <p>Contact our engineering team today to discuss your technical requirements and consultancy needs.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg cta-btn">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;