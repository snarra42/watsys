import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './AnimatedSection.css';

const AnimatedSection = ({ children, className = '', animation = 'slide-up', delay = 0, id }) => {
    const [ref, isIntersecting] = useIntersectionObserver();

    return (
        <div
            id={id}
            ref={ref}
            className={`animated-section ${animation} ${isIntersecting ? 'in-view' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
