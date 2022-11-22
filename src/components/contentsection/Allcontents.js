import "./Allcontents.css";
import Allcarousel from "./carousel/Allcarousel";
import Anchor from "./anchor/anchor";
const Allcontents = () => {
  return (
    <div className="dark allcontents">
      <Allcarousel />
      <Anchor />
    </div>
  );
};
export default Allcontents;
