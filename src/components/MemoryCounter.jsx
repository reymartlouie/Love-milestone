const MemoryCounter = ({ timeStats, specialMilestone }) => {
  return (
    <div className="memory-counter">
      <div className="counter-grid">
        <div className="counter-item">
          <div className="counter-value">{timeStats.years}</div>
          <div className="counter-label">Year{timeStats.years !== 1 ? 's' : ''}</div>
        </div>
        <div className="counter-item">
          <div className="counter-value">{timeStats.months % 12}</div>
          <div className="counter-label">Month{(timeStats.months % 12) !== 1 ? 's' : ''}</div>
        </div>
        <div className="counter-item">
          <div className="counter-value">{timeStats.days}</div>
          <div className="counter-label">Day{timeStats.days !== 1 ? 's' : ''}</div>
        </div>
        <div className="counter-item">
          <div className="counter-value">{timeStats.hours}</div>
          <div className="counter-label">Hour{timeStats.hours !== 1 ? 's' : ''}</div>
        </div>
        <div className="counter-item">
          <div className="counter-value">{timeStats.minutes}</div>
          <div className="counter-label">Minute{timeStats.minutes !== 1 ? 's' : ''}</div>
        </div>
        <div className="counter-item">
          <div className="counter-value">{timeStats.seconds}</div>
          <div className="counter-label">Second{timeStats.seconds !== 1 ? 's' : ''}</div>
        </div>
      </div>
      {specialMilestone && (
        <div className="special-milestone">
          {specialMilestone}
        </div>
      )}
    </div>
  );
};

export default MemoryCounter;
