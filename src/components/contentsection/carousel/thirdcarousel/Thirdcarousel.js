import { useEffect, useState } from "react";
import Articles from "./Thirscarouselapi";
import "./Thirdcarousel.css";
const Categories = () => {
  const [topics, settopics] = useState([]);
  useEffect(() => {
    settopics(Articles);
  }, []);
  const distincttopics = topics.map((elem, id) => {
    return elem.topic;
  });
  let categories = new Set();
  for (let i = 0; i < distincttopics.length; i++) {
    if (!categories.has(distincttopics[i])) {
      categories.add(distincttopics[i]);
    }
  }
  const categoory = Array.from(categories);

  const Category1 = Articles.map((elem, id) => {
    if (elem.topic == categoory[0]) {
      return (
        <div key={id} className="carousel3 dark">
          <div className="thirdcarousel">
            <div className="contentheading">
              <h3>{elem.author}</h3>
              <strong>{elem.excerpt}</strong>
              <p>{elem.title}</p>
            </div>
            <div className="contentimage">
              <img className="" src={elem.media} alt={elem.published_date} />
            </div>
            <div className="newssymbols">
              <i className="fa-solid fa-face-smile"></i>
              <i className="fa-solid fa-comment"></i>
              <i className="fa-solid fa-bookmark"></i>
              <i className="fa-solid fa-share"></i>
            </div>
          </div>
        </div>
      );
    }
  });
  const Category2 = Articles.map((elem, id) => {
    if (elem.topic == categoory[1]) {
      return (
        <div key={id} className="carousel3 dark">
          <div className="thirdcarousel">
            <div className="contentheading">
              <h3>{elem.author}</h3>
              <strong>{elem.excerpt}</strong>
              <p>{elem.title}</p>
            </div>
            <div className="contentimage">
              <img className="" src={elem.media} alt={elem.published_date} />
            </div>
            <div className="newssymbols">
              <i className="fa-solid fa-face-smile"></i>
              <i className="fa-solid fa-comment"></i>
              <i className="fa-solid fa-bookmark"></i>
              <i className="fa-solid fa-share"></i>
            </div>
          </div>
        </div>
      );
    }
  });
  const Category3 = Articles.map((elem, id) => {
    if (elem.topic == categoory[2]) {
      return (
        <div key={id} className="carousel3 dark">
          <div className="thirdcarousel">
            <div className="contentheading">
              <h3>{elem.author}</h3>
              <strong>{elem.excerpt}</strong>
              <p>{elem.title}</p>
            </div>
            <div className="contentimage">
              <img className="" src={elem.media} alt={elem.published_date} />
            </div>
            <div className="newssymbols">
              <i className="fa-solid fa-face-smile"></i>
              <i className="fa-solid fa-comment"></i>
              <i className="fa-solid fa-bookmark"></i>
              <i className="fa-solid fa-share"></i>
            </div>
          </div>
        </div>
      );
    }
  });
  const Category4 = Articles.map((elem, id) => {
    if (elem.topic == categoory[3]) {
      return (
        <div key={id} className="carousel3 dark">
          <div className="thirdcarousel">
            <div className="contentheading">
              <h3>{elem.author}</h3>
              <strong>{elem.excerpt}</strong>
              <p>{elem.title}</p>
            </div>
            <div className="contentimage">
              <img className="" src={elem.media} alt={elem.published_date} />
            </div>
            <div className="newssymbols">
              <i className="fa-solid fa-face-smile"></i>
              <i className="fa-solid fa-comment"></i>
              <i className="fa-solid fa-bookmark"></i>
              <i className="fa-solid fa-share"></i>
            </div>
          </div>
        </div>
      );
    }
  });
  const Category5 = Articles.map((elem, id) => {
    if (elem.topic == categoory[4]) {
      return (
        <div key={id} className="carousel3 dark">
          <div className="thirdcarousel">
            <div className="contentheading">
              <h3>{elem.author}</h3>
              <strong>{elem.excerpt}</strong>
              <p>{elem.title}</p>
            </div>
            <div className="contentimage">
              <img className="" src={elem.media} alt={elem.published_date} />
            </div>
            <div className="newssymbols">
              <i className="fa-solid fa-face-smile"></i>
              <i className="fa-solid fa-comment"></i>
              <i className="fa-solid fa-bookmark"></i>
              <i className="fa-solid fa-share"></i>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="dark">
      {Category1[0]}
      {Category2}
      {Category3}
      {Category4}
      {Category5}
    </div>
  );
};
export default Categories;
