import "./Lowersidebar.css";
import categoriestype from "./Lowersidebartitles";
const category = categoriestype.map((element, id) => {
  return (
    <li key={id} className="category">
      <i className={element.icon}></i>
      <p className="categoryname">{element.categoryname}</p>
    </li>
  );
});
const Lowersidebar = () => {
  return (
    <div className="dark lowersidebar">
      <ul className="categories">
        <li className="category">
          <i className="fa-solid fa-home"></i>
          <p className="categoryname">
            <strong>Home</strong>
          </p>
        </li>
        {category}
      </ul>
    </div>
  );
};
export default Lowersidebar;
