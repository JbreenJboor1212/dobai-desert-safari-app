import NewsLetterImage from "../../images/newsletterimage.jpg";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div className="news-letter-container">
        <div className="news-letter-image-wrapper">
          <img
            src={NewsLetterImage}
            alt="news-letter"
            className="news-letter-image"
          />
        </div>
        <div className="news-letter-content">
          <h2 className="news-letter-content-title">
            Your Dubai itinerary Is Waiting .
          </h2>
          <p className="news-letter-content-desc">
            Receive a curated 48-hour itinerary featuring the most iconic
            experience in Dubai, straight to your inbox.
          </p>
          <div className="news-letter-inputs">
            <input
              type="text"
              placeholder="Your Email"
              className="news-letter-input"
            />
            <button className="news-letter-btn"> Sign Up </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
