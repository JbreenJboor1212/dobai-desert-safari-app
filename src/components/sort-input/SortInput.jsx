import "./SortInput.css";

const SortInput = ({ toursLength, setSortItem, sortItem }) => {
  return (
    <div className="sort-input-container">
      <div className="available-tours">
        {toursLength} tours Found <i className="bi bi-info-circle"></i>
      </div>
      <select className="select"
        value={sortItem}
        onChange={(e) => {
          setSortItem(e.target.value);
        }}
      >
        <option value="Recommended" className="option">Recommended</option>
        <option value="Low" className="option">Price - Low to High</option>
        <option value="High" className="option">Price - High to Low</option>
      </select>
    </div>
  );
};

export default SortInput;
