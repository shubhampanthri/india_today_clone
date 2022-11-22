import google from "./images/goo.png";
import androidtv from "./images/and.png";
import apple from "./images/apple.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="dark footer">
      <div className=" dark footerhead">
        <h1>INDIA TODAY</h1>
        <div className="socialmediaicon">
          <p>Follow us on:</p>
          <a href="#" target="_blank">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fa-brands fa-square-twitter"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="dark footermid">
        <p>Download App</p>
        <div className="getiton">
          <img src={google} alt="Google Play Store" />
          <img src={apple} alt="Apple Store" />
          <img src={androidtv} alt="Android Tv Store" />
        </div>
      </div>
      <div className="dark footerbottom">
        <ul>
          <li>About US</li>
          <li>contact US</li>
          <li>terms and condition</li>
          <li>archives</li>
        </ul>
        <div className="dark copyright">
          <p>
            Copyright © 2022 Living Media India Limited. For reprint rights:
            Syndications Today
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
