import { useParams } from "react-router-dom";
import { toursList } from "../../data.js";
import Rating from "../../components/rating/Rating";
import "./SingleTour.css";
import BookNow from "./BookNow.jsx";
import TourInfoItem from "./TourInfoItem.jsx";

const SingleTour = () => {
  const { id } = useParams();
  const singleTour = toursList.find((list) => list.id === +id);
  const { title, reviews, rating, image, priceFrom } = singleTour;
  return (
    <section className="tour">
      <div className="tour-step">
        United Arab Emirates <i className="bi bi-chevron-right"></i>
        Things to do in Dubai <i className="bi bi-chevron-right"></i> Safari
      </div>
      <div className="tour-category">ADVENTURE</div>
      <h1 className="tour-title">Dubai : {title}</h1>
      <div className="tour-info">
        <Rating reviews={reviews} rating={rating} />
      </div>
      <div className="tour-provider">
        Activity Provider : <span>Jibreel Jboor</span>
      </div>
      <div className="tour-img-wrapper">
        <img src={image} alt={title} className="tour-image" />
        <BookNow priceFrom={priceFrom} />
      </div>
      <p className="tour-description">
        Discover a different aide of Dubai an a fun-filler safari across the
        desert . Try sailboarding , dune bashing and a camel ride, with the
        option to add an electrifying quad bike ride or immersive Al Khayma Camp
        dinner experience to your adventure.
      </p>
      <div className="tour-more-information">
        <h2 className="tour-info-title">About this activity</h2>
        <TourInfoItem
          value="#2ecc71"
          icon="bi bi-calendar3"
          title="Free Cancellation"
          paragraph="Chanel Up to 24 hours in advance to receive a full refund"
        />

        <TourInfoItem
          value="#2980b9"
          icon="bi bi-calendar-plus-fill"
          title="Reserve now & pay later"
          paragraph="Keep your travel plan flexible -- book your spot and pay nothing
          today."
        />

        <TourInfoItem
          value="#e74c3c"
          icon="bi bi-virus"
          title="Covid -19 precaution"
          paragraph=" Special health and safety measures are in place. Check your activity
          voucher once you book for full details."
        />

        <TourInfoItem
          value="#8e44ad"
          icon="bi bi-clock-history"
          title="Duration 4 - 7 hours"
          paragraph="Check availability to see starting times."
        />

        <TourInfoItem
          value="#2c3e50"
          icon="bi bi-person-check"
          title="Live tour guide"
          paragraph="English"
        />
      </div>
    </section>
  );
};

export default SingleTour;
