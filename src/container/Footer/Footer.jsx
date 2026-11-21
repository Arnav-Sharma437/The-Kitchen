import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

// import { FooterOverlay } from "../../components";
// import { Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="footer">
    {/* <FooterOverlay /> */}
    {/* <Newsletter /> */}

    <div className="app__footer-links_logo">
      <img src={images.gericht} alt="footer_logo" />
      <p className="p__opensans">
        Elevating Pan-Asian Dining to New Heights
      </p>
      <img
        src={images.spoon}
        alt=""
        className="spoon__img"
        style={{ marginTop: 15 }}
      />
      <div className="app__footer-links_icons">
        <a href="https://www.instagram.com/thekitchen_chiswick" target="_blank" rel="noopener noreferrer">
          <FiInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61583360651621" target="_blank" rel="noopener noreferrer">
          <FiFacebook />
        </a>
        <a href="https://www.tiktok.com/@thekitchen_chiswick" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
      </div>
    </div>

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <a
          href="https://maps.app.goo.gl/3EGW1PZRfz2hgCYL7"
          target="_blank"
          rel="noopener noreferrer"
          className="p__opensans"
          style={{ color: '#AAAAAA', textDecoration: 'none', cursor: 'pointer' }}
        >
          301 Chiswick High Rd., Chiswick, London W4 4HH, United Kingdom
        </a>
        <a
          href="tel:+442045378180"
          className="p__opensans"
          style={{ color: '#AAAAAA', textDecoration: 'none', cursor: 'pointer' }}
        >
          Tel: 020 4537 8180
        </a>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday to Sunday : 12 PM to 11 PM</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2025 The Kitchen Chiswick. All Rights reserved.</p>
      <p className="p__opensans">
        Designed and Developed by{" "}
        <a
          href="https://www.digitalgb.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="digitalgb-link"
        >
          DigitalGB
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
