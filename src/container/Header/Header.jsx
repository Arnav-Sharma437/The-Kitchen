import React from "react";

import { SubHeading } from "../../components";
import "./Header.css";

const Header = () => {
  const [showBookingModal, setShowBookingModal] = React.useState(false);

  const openBookingModal = () => {
    setShowBookingModal(true);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app__header" id="home">
      <div className="app__header-content">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Elevating Pan-Asian Dining to New Heights.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button type="button" className="custom__button" onClick={scrollToMenu}>
            Explore Menu
          </button>
          <button type="button" className="custom__button" onClick={openBookingModal}>
            Book Table
          </button>
        </div>
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
    </div>
  );
};

export default Header;
