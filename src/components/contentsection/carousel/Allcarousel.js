import "./Allcarousel.css";
import Carousel from "./firstcarousel/Carousel";
import Secondcarousel from "./secondcarousel/Secondcarousel";
import Categoriess from "./thirdcarousel/Thirdcarousel";
const Allcarousel = () => {
  return (
    <div className="dark">
      <Carousel />
      <Secondcarousel />
      <Categoriess />
    </div>
  );
};
export default Allcarousel;
