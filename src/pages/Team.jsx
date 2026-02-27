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
                        <p className="page-subtitle">
                            Meet the experts behind our innovative infrastructure solutions.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Team Cards */}
            <section className="section team-roster">
                <div className="container">
                    <div className="text-center mb-5">
                        <AnimatedSection animation="slide-up">
                            <h2 className="section-title">Our Multidisciplinary Team</h2>
                            <p className="section-subtitle">
                                We bring together seasoned professionals across hydraulic engineering, geomatics,
                                project finance, and construction management.
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="team-grid">
                        {team.map((member, index) => (
                            <AnimatedSection
                                key={member.id}
                                animation="slide-up"
                                delay={index * 120}
                            >
                                <TeamCard member={member} />
                            </AnimatedSection>
                        ))}

                        {/* Image directly after cards in the grid */}
                        <AnimatedSection animation="fade-in" delay={team.length * 120} className="team-image-grid-item">
                            <div className="team-image-wrapper">
                                <img
                                    src="/about-team.png"
                                    alt="WATSYS Engineering Team"
                                    className="team-support-image"
                                />
                            </div>
                        </AnimatedSection>
                    </div>

                </div>
            </section>

            {/* Support Text Section */}
            <section className="section team-support bg-light">
                <div className="container">
                    <AnimatedSection animation="fade-in">
                        <div className="support-team-content">
                            <p>
                                Our organization is supported by a multidisciplinary team comprising
                                design engineers, draughtsmen, and surveyors who collectively ensure smooth
                                execution of projects. Design engineers assist in detailed calculations,
                                preparation of technical drawings, BOQs, and design validations.
                                Draughtsmen prepare accurate CAD drawings, layout plans and longitudinal
                                sections. Surveyors conduct topographical surveys, DGPS mapping and field
                                data collection to support planning and design activities. This integrated
                                support structure enables timely delivery, technical accuracy, and effective
                                coordination across all stages of infrastructure projects.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Join Section */}
            <section className="section join-team bg-alt">
                <div className="container text-center">
                    <AnimatedSection animation="fade-in">
                        <h2>Join Our Growing Practice</h2>
                        <p className="section-subtitle">
                            We are always looking for passionate civil engineers,
                            GIS specialists, and water modeling experts to join
                            our mission of building sustainable infrastructure.
                        </p>
                        <button className="btn btn-primary btn-lg">
                            View Open Positions
                        </button>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Team;