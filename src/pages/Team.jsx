import TeamCard from '../components/TeamCard';
import AnimatedSection from '../components/AnimatedSection';
import { team } from '../data/team';
import './Team.css';

const Team = () => {
    return (
        <div className="team-page">
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="slide-up">
                        <h1 className="page-title text-gradient">Engineering Leadership</h1>
                        <p className="page-subtitle">Meet the experts behind our innovative infrastructure solutions.</p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section team-roster">
                <div className="container">
                    <div className="text-center mb-5">
                        <AnimatedSection animation="slide-up">
                            <h2 className="section-title">Our Multidisciplinary Team</h2>
                            <p className="section-subtitle">
                                We bring together seasoned professionals across hydraulic engineering, geomatics, project finance, and construction management. This diverse expertise enables us to tackle complex water and environmental challenges effectively.
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="team-grid">
                        {team.map((member, index) => (
                            <AnimatedSection key={member.id} animation="slide-up" delay={index * 150}>
                                <TeamCard member={member} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section team-support bg-light">
                <div className="container">
                    <AnimatedSection animation="fade-in">
                        <div className="support-team-content text-center mx-auto" style={{ maxWidth: '900px', padding: '2rem 0' }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
                                The organization is strengthened by a multidisciplinary team comprising design engineers, draughtsmen, surveyors, and accountants who collectively ensure smooth execution of projects. Design engineers assist in detailed calculations, preparation of technical drawings, BOQs, and design validations. Draughtsmen are responsible for preparing accurate CAD drawings, layout plans, longitudinal sections, and schematic representations in accordance with project standards. Surveyors conduct topographical surveys, DGPS mapping, and field data collection to support planning and design activities. The accounts team manages budgeting, financial documentation, billing, cost tracking, and statutory compliance, ensuring financial discipline throughout the project lifecycle. This integrated support structure enables timely delivery, technical accuracy, and effective coordination across all stages of infrastructure projects.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section join-team bg-alt">
                <div className="container text-center">
                    <AnimatedSection animation="fade-in">
                        <h2>Join Our Growing Practice</h2>
                        <p className="section-subtitle" style={{ margin: '1rem auto 2.5rem' }}>
                            We are always looking for passionate civil engineers, GIS specialists, and water modeling experts to join our mission of building sustainable infrastructure.
                        </p>
                        <button className="btn btn-primary btn-lg">View Open Positions</button>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Team;
