import AnimatedSection from '../components/AnimatedSection';
import realSurvey1 from '../assets/real-survey-1.jpeg';
import realSurvey2 from '../assets/real-survey-2.jpeg';
import realSurvey3 from '../assets/real-survey-3.jpeg';
import realSurvey4 from '../assets/real-survey-4.jpeg';
import realTopo1 from '../assets/real-topo-1.jpeg';
import realTopo2 from '../assets/real-topo-2.jpeg';
import realTopo3 from '../assets/real-topo-3.jpeg';
import realTopo4 from '../assets/real-topo-4.jpeg';
import './CustomerSurvey.css';

const CustomerSurvey = () => {

    return (
        <div className="survey-page">
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="slide-up">
                        <h1 className="page-title text-gradient">Our Additional Technical Services</h1>
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
                            The Customer Survey forms a critical component of both water supply and UGD projects. With extensive experience in conducting customer surveys, we generate accurate field-level data essential for planning, design, and NRW reduction in water supply systems, as well as for and capacity planning in UGD schemes. By developing an authentic and comprehensive consumer-level dataset, our surveys support demand assessment, hydraulic modelling, and the implementation of transparent, efficient, and customer-oriented water supply and UGD systems.
                        </p>
                    </AnimatedSection>

                    {/* 4 Column Grid for Customer Survey Images */}
                    <div className="customer-survey-images" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                        <img src={realSurvey1} alt="Customer Survey Location 1" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', aspectRatio: '4/3', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                        <img src={realSurvey2} alt="Customer Survey Location 2" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', aspectRatio: '4/3', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                        <img src={realSurvey3} alt="Customer Survey Location 3" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', aspectRatio: '4/3', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                        <img src={realSurvey4} alt="Customer Survey Location 4" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', aspectRatio: '4/3', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
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

                    {/* 4 Column Grid for Topographical Survey Images */}
                    <div className="customer-survey-images topo-survey-images" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                        <img src={realTopo1} alt="Topographical Survey Location 1" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', aspectRatio: '4/3', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                        <img src={realTopo2} alt="Topographical Survey Location 2" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', aspectRatio: '4/3', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                        <img src={realTopo3} alt="Topographical Survey Location 3" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', aspectRatio: '4/3', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                        <img src={realTopo4} alt="Topographical Survey Location 4" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', aspectRatio: '4/3', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomerSurvey;
