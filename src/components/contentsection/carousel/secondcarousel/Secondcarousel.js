import { useEffect, useState } from "react";
import Articles from "./Secondcarouselapi";
import "./Secondcarousel.css";
const Secondcarousel = () => {
  const [news, setnews] = useState([]);
  useEffect(() => {
    setnews(Articles);
  }, []);

  const allnews = news.map((elem, id) => {
    return (
      <div key={id} className="carousel">
        <div className="contentimage">
          <img className="" src={elem.media} />
        </div>
        <div className="contentheading">
          <h3>{elem.topic}</h3>
          <p>{elem.title}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="carousel2">
      <h1 className="topstories">TOP STORIES</h1>
      <div className="dark secondcarousels">
        <div className="carousels">{allnews}</div>
      </div>
    </div>
  );
};
export default Secondcarousel;
