const ScatteredPhotos = ({ show }) => {
  const photos = [
    { src: '/images/stolen.JPG', position: 'top-right', delay: 0.2, rotation: 12 },
    { src: '/images/official.JPG', position: 'right', delay: 0.5, rotation: -8 },
    { src: '/images/acquiantance.JPG', position: 'bottom-right', delay: 0.8, rotation: 15 },
    { src: '/images/valentines_day.jpg', position: 'bottom', delay: 1.1, rotation: -12 },
    { src: '/images/late_birthday_celebration.JPG', position: 'top', delay: 1.4, rotation: 6 },
  ];

  if (!show) return null;

  return (
    <div className="scattered-photos">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`scattered-photo ${photo.position}`}
          style={{
            '--delay': `${photo.delay}s`,
            '--rotation': `${photo.rotation}deg`,
          }}
        >
          <img src={photo.src} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ScatteredPhotos;
