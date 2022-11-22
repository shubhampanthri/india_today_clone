import "./Midsidebar.css";
const Midsidebar = () => {
  const darkmodechanger = () => {
    const darkmodeon = document.getElementsByClassName("darkmodeon")[0];
    darkmodeon.classList.toggle("fa-toggle-on");
    darkmodeon.className.includes("fa-toggle-on");
    var dark = document.getElementsByClassName("dark");
    if (darkmodeon.className.includes("fa-toggle-on")) {
      for (let i = 0; i < dark.length; i++) {
        dark[i].classList.add("darked");
      }
      // dark.classList.add("darked");
    } else {
      for (let i = 0; i < dark.length; i++) {
        dark[i].classList.remove("darked");
      }
    }
  };
  return (
    <div className=" dark midsidebar">
      <div className="  midsidebarelement1">
        <i className="fa-regular fa-user"></i>
        <p>SIGN IN</p>
      </div>
      <div className="midsidebarelement2">
        <h3>Dark Mode</h3>
        <div onClick={darkmodechanger}>
          <i className="darkmodeon fa-solid fa-toggle-off"></i>
        </div>
      </div>
    </div>
  );
};
export default Midsidebar;
