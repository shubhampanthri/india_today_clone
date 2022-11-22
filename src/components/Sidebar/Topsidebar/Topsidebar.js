import "./Topsidebar.css";
const Topsidebar = () => {
  const closesidebar = () => {
    var sidebar = document.getElementsByClassName("sidebar")[0];
    sidebar.classList.remove("slide");
  };
  return (
    <div className="topsidebar">
      <h3>INDIA TODAY</h3>
      <i onClick={closesidebar} className="fa-solid fa-close"></i>
    </div>
  );
};
export default Topsidebar;
