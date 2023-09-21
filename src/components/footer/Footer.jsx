import "./footer.css";
import LinkedIn from "../../asset/images/linkedin_icon.png";
import Instagram from "../../asset/images/instagram_icon.webp";

const Footer = () => {
  return (

        <div className="section footerband">
        <div className="container">
        <div className="content">
        <div className="footer-row1">
        <div className="contact">
        <div className="email">
          <span className="text-span-2">want to collaborate?</span> &nbsp;&nbsp;
          <a href="mailto:team@pearllumi.com" className="mailto">
          <span className="text-span-3">TEAM@PEARLLUMI.CO</span>
          </a>
        </div>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/pearllumi.creative/" className="instagram w-inline-block">
            <div className="item"><img src={Instagram} alt="instagram logo" width= "20px" height="20px" /> </div>
          </a>
          <a href="https://www.linkedin.com/company/pearllumi" className="linkedin w-inline-block">
            <div className="item"><img src={LinkedIn} alt="linkedin logo" width= "18px" height="18px" /> </div>
          </a>
        </div>
        </div>
        <div className="footer-row2">
        </div>
        <div className="footer-row3">© 2022 PearlLumi Creative Designs.<br />All rights reserved.</div>
        </div>
        </div>
        </div>
  );
};

export default Footer;


