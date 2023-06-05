const Menu = ({ setToggle, toggle }) => {
  return (
    <div
      className="menu"
      onClick={() => {
        setToggle((prev) => !prev);
      }}
    >
      {toggle ? (
        <i className="bi bi-x-lg"></i>
      ) : (
        <i className="bi bi-list"></i>
      )}
    </div>
  );
};

export default Menu;
