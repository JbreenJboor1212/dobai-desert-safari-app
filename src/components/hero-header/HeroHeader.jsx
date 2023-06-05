import "./HeroHeader.css";

const HeroHeader = () => {
  return (
    <div className="hero-header">
      <div className="search-box">
        <div className="input-wrapper">
          <i className="bi bi-search"></i>
          <input
            type="search"
            name=""
            id=""
            placeholder="What are you  looking for  ? "
            className="search-box-input"
          />
        </div>
        <button className="search-box-btn">Search</button>
      </div>
      <div className="hero-header-title">
        <h3>Dubai</h3>
        <h1>Desert Safari</h1>
      </div>
    </div>
  );
};

export default HeroHeader;
