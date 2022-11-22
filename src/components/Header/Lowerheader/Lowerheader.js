import "./Lowerheader.css";
const title = ["G20Submit", "Election2024", "cop27", "elonMusk", "Airquality"];
const Lowerheader = () => {
  const Lowerheaderelements = title.map((element, id) => {
    return (
      <li key={id} className="lowerheaderelement">
        <p>{element}</p>
      </li>
    );
  });
  return (
    <div className="dark lowerheader">
      <ul>{Lowerheaderelements}</ul>
    </div>
  );
};
export default Lowerheader;
