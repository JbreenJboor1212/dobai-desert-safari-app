const TourInfoItem = ({ icon, title, paragraph, value }) => {
  return (
    <div className="tour-info-item">
      <div className="tour-info-item-title">
        <i style={{ color: value }} className={icon}></i>
        {title}
      </div>
      <p className="tour-info-item-desc">{paragraph}</p>
    </div>
  );
};

export default TourInfoItem;
