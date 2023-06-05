import "./Rating.css";
import StarRating from "./StarRating";

const Rating = ({ reviews, rating }) => {
  return (
    <div className="rating">
      <StarRating rating={rating} />
      <span className="child-rating">{rating}</span>
      <span className="child-reviews">({reviews} reviews)</span>
    </div>
  );
};

export default Rating;
