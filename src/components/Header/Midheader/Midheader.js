import "./Midheader.css";
const Midheader = () => {
  const sidebarhandler = () => {
    var sidebar = document.getElementsByClassName("sidebar")[0];
    sidebar.classList.add("slide");
  };
  return (
    <div className="dark midheader">
      <div className="bars">
        <i onClick={sidebarhandler} className="fa-solid fa-bars"></i>
      </div>
      <div className="heading">
        <h1>INDIA TODAY</h1>
      </div>
      <div className="book">
        <i className="fa-solid fa-book"></i>
      </div>
      <div className="tv">
        <i className="fa-solid fa-tv"></i>
      </div>
      <div className="search">
        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};
export default Midheader;
