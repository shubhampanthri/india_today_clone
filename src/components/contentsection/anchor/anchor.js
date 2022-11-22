import rajdeep from "./anchorimage/rajdeep.jpg";
import rahul from "./anchorimage/rahul.jpg";
import gaurav from "./anchorimage/gaurav.jpg";
import preeti from "./anchorimage/preeti.jpg";
import shiv from "./anchorimage/shiv.jpg";
import chaiti from "./anchorimage/chaiti.jpeg";
import "./anchor.css";
const Anchor = () => {
  return (
    <div className="dark anchorcarouselcontainer">
      <p>Anchors</p>
      <div className="anchorcarousel">
        <div className="anchordetails">
          <div className="anchorbox">
            <div className="imgfolder">
              <img src={shiv} alt={shiv} />
            </div>
            <h1>shiv aroor</h1>
          </div>
          <div className="anchorbox">
            <div className="imgfolder">
              <img src={rajdeep} alt={rajdeep} />
            </div>
            <h1>rajdeep sardesai</h1>
          </div>
          <div className="anchorbox">
            <div className="imgfolder">
              <img src={preeti} alt={preeti} />
            </div>
            <h1>preeti choudhary</h1>
          </div>
          <div className="anchorbox">
            <div className="imgfolder">
              <img src={gaurav} alt={gaurav} />
            </div>
            <h1>gaurav sawant</h1>
          </div>
          <div className="anchorbox">
            <div className="imgfolder">
              <img src={chaiti} alt={chaiti} />
            </div>
            <h1>chaiti narula</h1>
          </div>
          <div className="anchorbox">
            <div className="imgfolder">
              <img src={rahul} alt={rahul} />
            </div>
            <h1>rahul kanwal</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Anchor;
