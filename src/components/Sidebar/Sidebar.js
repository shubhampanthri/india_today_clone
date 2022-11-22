import "./Sidebar.css";
import Topsidebar from "./Topsidebar/Topsidebar";
import Midsidebar from "./Midsidebar/Midsidebar";
import Lowersidebar from "./Lowersidebar/Lowersidebar";
const Sidebar = () => {
  return (
    <div className="dark sidebar">
      <Topsidebar />
      <Midsidebar />
      <Lowersidebar />
    </div>
  );
};
export default Sidebar;
