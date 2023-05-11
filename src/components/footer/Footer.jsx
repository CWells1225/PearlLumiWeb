import "./footer.css";

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
        <img src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbd25f4eb20a874daa80d25_instagram.svg" loading="lazy" alt="" />
        </a>
        <a href="https://www.linkedin.com/company/pearllumi" className="linkedin w-inline-block">
        <img src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbd25f4f6893e45b40800c6_linkedin.svg" loading="lazy" alt="" />
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