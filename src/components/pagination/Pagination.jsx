
import "./Pagination.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const generationPages = [];

  for (let i = 1; i <= pages; i++) {
    generationPages.push(i);
  }

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        className="left"
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        <i className="bi bi-arrow-left"></i>
      </button>
      {generationPages.map((page) => (
        <div
          key={page}
          className={currentPage === page ? "page active" : "page"}
          onClick={() => {
            setCurrentPage(page);
          }}
        >
          {page}
        </div>
      ))}
      <button
        disabled={currentPage === pages}
        className="right"
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        <i className="bi bi-arrow-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
