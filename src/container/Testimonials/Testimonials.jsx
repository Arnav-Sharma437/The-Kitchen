import React, { useState, useEffect } from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Dan X",
    rating: 5,
    price: "£30–40",
    review: "Would recommend. We had a variety of offerings, including a mixed salmon platter, gyoza, spicy tuna, and a speciality roll. The quality was great and we all appreciated that the rice was in perfect proportion to the fish and veg. Our group also liked that the rice was not too sweet. Many places will use so much rice that it takes over the sushi.",
    foodRating: "5/5",
    serviceRating: "5/5",
    atmosphereRating: "5/5"
  },
  {
    name: "Simran Alwadi",
    rating: 5,
    price: "£100+",
    review: "Great food and even better service! The staff were friendly and attentive, and everything we ordered was delicious—especially the sushi. Cozy atmosphere and fair prices. Will be coming back soon!",
    foodRating: "5/5",
    serviceRating: "5/5",
    atmosphereRating: "5/5"
  },
  {
    name: "Matthew Clarke",
    rating: 5,
    review: "Great experience in Chiswick. Food was great as well as the decor and service. Thanks to Ash.",
    foodRating: "5/5",
    serviceRating: "5/5",
    atmosphereRating: "4/5"
  },
  {
    name: "Rehman Ali",
    rating: 5,
    review: "Amazing food and excellent service! This place always serves fresh, flavorful dishes. Great portions, friendly staff, and a wonderful atmosphere. A must-try for all food lovers once you go, you'll want to come back! Highly recommended"
  },
  {
    name: "Ivan",
    rating: 5,
    review: "Wow-outstanding experience. We're picky diners, but this genuinely got close to Michelin-level stuff. The food was exceptional, the pricing remarkably fair, and the ambience far beyond what you'd expect. A superb addition to Chiswick. We'll be regulars. Be sure to check it out."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="app__testimonials app__bg section__padding" id="testimonials">
      <div className="app__testimonials-content">
        <SubHeading title="What We Believe In" />
        <h1 className="headtext__cormorant">Customer Reviews</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: '2rem' }} />

        <div className="app__testimonials-slider">
          <div className="app__testimonials-card">
            <div className="app__testimonials-stars">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>

            <p className="p__opensans app__testimonials-review">
              "{currentTestimonial.review}"
            </p>

            {currentTestimonial.foodRating && (
              <div className="app__testimonials-ratings">
                <p className="p__opensans">Food: {currentTestimonial.foodRating}</p>
                <p className="p__opensans">Service: {currentTestimonial.serviceRating}</p>
                <p className="p__opensans">Atmosphere: {currentTestimonial.atmosphereRating}</p>
              </div>
            )}

            <p className="p__cormorant app__testimonials-name">
              - {currentTestimonial.name}
            </p>

            {currentTestimonial.price && (
              <p className="p__opensans app__testimonials-price">
                {currentTestimonial.price}
              </p>
            )}
          </div>

          <div className="app__testimonials-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
