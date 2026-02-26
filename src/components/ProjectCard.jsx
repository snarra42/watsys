import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectImage1 from '../assets/new-project-photo-1.jpeg';
import projectImage2 from '../assets/new-project-photo-2.jpeg';
import projectImage3 from '../assets/new-project-photo-3.jpeg';
import projectImage4 from '../assets/new-project-photo-4.jpeg';
import './ProjectCard.css';

const getCategoryImage = (category) => {
    switch (category) {
        case 'Water Supply': return projectImage1;
        case 'Underground Drainage': return projectImage2;
        case 'NRW Reduction': return projectImage3;
        default: return projectImage4;
    }
}

const ProjectCard = ({ project }) => {
    const heroImage = getCategoryImage(project.category);

    return (
        <div className="project-card">
            <div className="project-image-placeholder" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                {/* Dark overlay for readability */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 1 }}></div>

                <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <span className="project-category">{project.category}</span>
                    <div className="project-status">
                        <span className={`status-dot ${project.status === 'Completed' ? 'status-completed' : 'status-ongoing'}`}></span>
                        {project.status}
                    </div>
                </div>
            </div>
            <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                {project.description !== project.name && (
                    <p className="project-desc">{project.description}</p>
                )}

                <div className="project-meta">
                    <div className="meta-item">
                        <MapPin size={16} />
                        <span>{project.location}</span>
                    </div>
                    <div className="meta-item client-meta">
                        <strong>Client:</strong>
                        <span>{project.client}</span>
                    </div>
                </div>

                <Link to={`/projects/${project.id}`} className="btn btn-outline project-btn">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
