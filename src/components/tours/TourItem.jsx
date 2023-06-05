import { Link } from "react-router-dom";
import Rating from "../rating/Rating";

const TourItem = ({ item }) => {
  const { image, title, duration, rating, reviews, priceFrom ,id} = item;
  return (
    <div className="tour-item">
      <img src={image} alt={title} className="tour-item-img" />
      <span className="tour-item-label">ADVENTURE</span>
      <div className="tour-item-body">
        <div className="tour-item-title">{title}</div>
        <div className="tour-item-duration">
          <span>{duration}</span> <i className="bi bi-dot"></i>
          Pickup available
        </div>
        <div>
          <Rating rating={rating} reviews={reviews} />
        </div>
        <div className="tour-item-price">
          From<strong> ${priceFrom} </strong> per person
        </div>
        <Link className="tour-item-link" to={`tour/${id}`}>See More</Link>
      </div>
    </div>
  );
};

export default TourItem;
