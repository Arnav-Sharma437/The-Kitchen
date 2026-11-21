import { SubHeading } from "../../components";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          301 Chiswick High Rd., Chiswick, London W4 4HH, United Kingdom
        </p>
        <a
          href="tel:+442045378180"
          className="p__opensans"
          style={{ color: '#DCCA87', textDecoration: 'none', display: 'block', margin: '0.5rem 0' }}
        >
          Tel: 020 4537 8180
        </a>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "1rem 0 0.5rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Monday to Sunday : 12 PM to 11 PM</p>

        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', fontSize: '1.5rem' }}>
          <a href="https://www.instagram.com/thekitchen_chiswick" target="_blank" rel="noopener noreferrer" style={{ color: '#DCCA87' }}>
            <FiInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61583360651621" target="_blank" rel="noopener noreferrer" style={{ color: '#DCCA87' }}>
            <FiFacebook />
          </a>
          <a href="https://www.tiktok.com/@thekitchen_chiswick" target="_blank" rel="noopener noreferrer" style={{ color: '#DCCA87' }}>
            <FaTiktok />
          </a>
        </div>
      </div>
      <a
        href="https://maps.app.goo.gl/3EGW1PZRfz2hgCYL7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
        >
          Visit Us
        </button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src="https://ik.imagekit.io/mv3sctrmq/The%20kitchen%20chiswick/CopyofSBS01718.JPG" alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
