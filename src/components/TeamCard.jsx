import { Linkedin, Mail } from 'lucide-react';
import './TeamCard.css';

const TeamCard = ({ member }) => {
    return (
        <div className="team-card">
            <div className="team-image-placeholder">
                <div className="team-initials">
                    {member.name.split(' ').map(n => n[0]).join('')}
                </div>
            </div>
            <div className="team-content">
                <span className="team-category">{member.category}</span>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-desc">{member.description}</p>
                <div className="team-social">
                    <a href="#" className="social-link" aria-label="LinkedIn Profile">
                        <Linkedin size={18} />
                    </a>
                    <a href="#" className="social-link" aria-label="Email Contact">
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;