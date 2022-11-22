import "./Topscroll.css";
const tags = [
  "MALAYALAM",
  "BUSINESS TODAY",
  "DAILYO",
  "AAJTAK",
  "LALLANTOP",
  "BANGLA",
  "GNTTV",
  "ICHOWK",
  "READER'S DIGEST",
  "SPORTS TAK",
  "CRIME TAK"
];
const tag = tags.map((element, id) => {
  return (
    <li key={id}>
      <a href="#">{element}</a>
    </li>
  );
});
const Topscroll = () => {
  return (
    <div className="dark topscroll  ">
      <div className="topscrollul">
        <ul>
          <li>
            <strong>
              <a href="#">India Today</a>
            </strong>
          </li>
          {tag}
        </ul>
      </div>
    </div>
  );
};
export default Topscroll;
