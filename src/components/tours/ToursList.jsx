import TourItem from "./TourItem";
import "./ToursList.css";

const ToursList = ({ toursList }) => {
  console.log(toursList.length);
  return (
    <div className="tours-list">
      {toursList.map((item) => (
        <TourItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ToursList;
