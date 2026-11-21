import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [showBookingModal, setShowBookingModal] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openBookingModal = () => {
    setShowBookingModal(true);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
  };

  // Handle scroll event to change navbar background
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleSectionNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home page with hash
      navigate(`/#${sectionId}`);
      // Small delay to ensure page loads before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on home page, update URL hash and scroll to section
      navigate(`#${sectionId}`, { replace: true });
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle hash navigation on page load
  React.useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <nav className={`app__navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="app__navbar-logo">
        <img src={images.logoBackground} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/">Home</Link>
        </li>
        <li className="p__opensans">
          <a href="#about" onClick={(e) => { e.preventDefault(); handleSectionNavigation('about'); }}>About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu" onClick={(e) => { e.preventDefault(); handleSectionNavigation('menu'); }}>Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards" onClick={(e) => { e.preventDefault(); handleSectionNavigation('awards'); }}>Features</a>
        </li>
        <li className="p__opensans">
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleSectionNavigation('contact'); }}>Contact</a>
        </li>
        <li className="p__opensans">
          <Link to="/policy">Policy</Link>
        </li>
      </ul>
      <div className="app__navbar-login">
        <button onClick={openBookingModal} className="p__opensans booking-button">
          Book Table
        </button>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <Link to="/" onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); setToggleMenu(false); handleSectionNavigation('about'); }}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => { e.preventDefault(); setToggleMenu(false); handleSectionNavigation('menu'); }}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={(e) => { e.preventDefault(); setToggleMenu(false); handleSectionNavigation('awards'); }}>
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); setToggleMenu(false); handleSectionNavigation('contact'); }}>
                  Contact
                </a>
              </li>
              <li>
                <Link to="/policy" onClick={() => setToggleMenu(false)}>
                  Policy
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setToggleMenu(false);
                    openBookingModal();
                  }}
                  className="p__opensans booking-button"
                  style={{ width: '100%', marginTop: '1rem' }}
                >
                  Book Table
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {showBookingModal && (
        <div className="booking-modal-overlay" onClick={closeBookingModal}>
          <div className="booking-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="booking-modal-close" onClick={closeBookingModal}>
              ×
            </button>
            <iframe
              src="https://www.sevenrooms.com/explore/thekitchenchiswick/reservations/create/search/"
              title="Book a Table"
              className="booking-iframe"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
