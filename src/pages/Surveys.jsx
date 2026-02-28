import * as Icons from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import './Services.css'; // Reusing existing services CSS for the grid layout
import customerSurveyField from '../assets/customer_survey_field.png';
import gisNetworkMap from '../assets/gis_network_map.png';
import customerSurveyReal1 from '../assets/customer-survey-real-1.png';
import customerSurveyReal2 from '../assets/customer-survey-real-2.png';
import customerSurveyReal3 from '../assets/customer-survey-real-3.png';
import customerSurveyReal4 from '../assets/customer-survey-real-4.png';
import customerSurveyNew1 from '../assets/customer-survey-new-1.png';
import customerSurveyNew2 from '../assets/customer-survey-new-2.png';
import customerSurveyNew3 from '../assets/customer-survey-new-3.png';
import customerSurveyNew4 from '../assets/customer-survey-new-4.png';
import realTopo1 from '../assets/new-topo-1.jpeg';
import realTopo2 from '../assets/new-topo-2.jpeg';
import realTopo3 from '../assets/new-topo-3.jpeg';
import realTopo4 from '../assets/new-topo-4.jpeg';
import realTopo5 from '../assets/new-topo-5.jpeg';
import realTopo6 from '../assets/new-topo-6.jpeg';
import realTopo8 from '../assets/new-topo-8.jpeg';
import realTopo9 from '../assets/new-topo-9.jpeg';
import realTopo10 from '../assets/new-topo-10.jpeg';
import realTopo11 from '../assets/new-topo-11.jpeg';
import realTopo12 from '../assets/new-topo-12.jpeg';
import realTopo13 from '../assets/new-topo-13.jpeg';
import realTopo14 from '../assets/new-topo-14.jpeg';

const Surveys = () => {
    return (
        <div className="services-page">
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="slide-up">
                        <h1 className="page-title text-gradient">Our Surveys</h1>
                        <p className="page-subtitle">Detailed ground-level data collection and mapping.</p>
                    </AnimatedSection>
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

                    <div className="survey-image-grid">
                        <img src={gisNetworkMap} alt="GIS Network Map" className="survey-image-item" />
                        <img src={customerSurveyReal1} alt="Customer Survey Real Project 1" className="survey-image-item" />
                        <img src={customerSurveyNew1} alt="Recent Project 1" className="survey-image-item" />
                        <img src={customerSurveyNew2} alt="Recent Project 2" className="survey-image-item" />
                        <img src={customerSurveyNew3} alt="Recent Project 3" className="survey-image-item" />
                        <img src={customerSurveyNew4} alt="Recent Project 4" className="survey-image-item" />
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
                    <div className="survey-image-grid">
                        {[customerSurveyField, customerSurveyReal2, customerSurveyReal4, realTopo1, realTopo2, realTopo3, realTopo4, realTopo5, realTopo6, realTopo8, realTopo9, realTopo10, realTopo11, realTopo12, realTopo13, realTopo14].map((src, idx) => (
                            <img key={idx} src={src} alt={`Topographical Survey Location ${idx + 1}`} className="survey-image-item" />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Surveys;
