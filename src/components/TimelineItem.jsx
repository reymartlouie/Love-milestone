import useIntersectionObserver from '../hooks/useIntersectionObserver';

const TimelineItem = ({ milestone, onImageClick }) => {
  const [ref, show] = useIntersectionObserver({ threshold: 0.2 });
  const itemClass = 'timeline-item ' + milestone.position + (show ? ' show' : '');

  return (
    <div ref={ref} className={itemClass}>
      <div className="timeline-content">
        <h2>{milestone.title}</h2>
        <p className="date">{milestone.date}</p>
        <img
          src={milestone.imageUrl}
          alt={milestone.title}
          onClick={() => onImageClick(milestone)}
        />
        <p>{milestone.description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
