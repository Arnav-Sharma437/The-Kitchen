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
        <p className="p__opensans" style={{ margin: "2rem 0 1rem" }}>
          Elevating Pan-Asian Dining to New Heights.
        </p>
        <div style={{ marginBottom: "2rem", cursor: "pointer" }} onClick={scrollToMenu}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(196, 21, 28, 0.9)',
            color: '#FFFFFF',
            border: '1px solid #DCCA87',
            padding: '0.6rem 1.5rem',
            borderRadius: '30px',
            fontSize: '15px',
            fontWeight: '600',
            letterSpacing: '0.5px',
            boxShadow: '0 4px 15px rgba(196, 21, 28, 0.4)',
          }}>
            🎄 Christmas Menu Now Live — 4 Courses &amp; Drink £44.90 &rarr;
          </span>
        </div>
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
