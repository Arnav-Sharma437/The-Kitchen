import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const reviews = [
  {
    name: "Dan X",
    rating: 5,
    review: "Would recommend. We had a variety of offerings, including a mixed salmon platter, gyoza, spicy tuna, and a speciality roll. The quality was great and we all appreciated that the rice was in perfect proportion to the fish and veg. Our group also liked that the rice was not too sweet. Many places will use so much rice that it takes over the sushi.",
    image: "https://ik.imagekit.io/mv3sctrmq/The%20kitchen%20chiswick/CopyofSBS01737.JPG"
  },
  {
    name: "Simran Alwadi",
    rating: 5,
    review: "Great food and even better service! The staff were friendly and attentive, and everything we ordered was delicious—especially the sushi. Cozy atmosphere and fair prices. Will be coming back soon!",
    image: "https://ik.imagekit.io/mv3sctrmq/The%20kitchen%20chiswick/CopyofSBS01735.JPG"
  },
  {
    name: "Matthew Clarke",
    rating: 5,
    review: "Great experience in Chiswick. Food was great as well as the decor and service. Thanks to Ash.",
    image: "https://ik.imagekit.io/mv3sctrmq/The%20kitchen%20chiswick/CopyofSBS01755.JPG"
  },
  {
    name: "Rehman Ali",
    rating: 5,
    review: "Amazing food and excellent service! This place always serves fresh, flavorful dishes. Great portions, friendly staff, and a wonderful atmosphere. A must-try for all food lovers once you go, you'll want to come back! Highly recommended",
    image: "https://ik.imagekit.io/mv3sctrmq/The%20kitchen%20chiswick/CopyofSBS01761.JPG"
  },
  {
    name: "Ivan",
    rating: 5,
    review: "Wow-outstanding experience. We're picky diners, but this genuinely got close to Michelin-level stuff. The food was exceptional, the pricing remarkably fair, and the ambience far beyond what you'd expect. A superb addition to Chiswick. We'll be regulars. Be sure to check it out.",
    image: "https://ik.imagekit.io/mv3sctrmq/The%20kitchen%20chiswick/CopyofSBS01753.JPG"
  }
];

const Chef = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentReview = reviews[currentIndex];

  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={currentReview.image} alt="review_image" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Reviews" />
        <h1 className="headtext__cormorant">What Our Guests Say</h1>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
          {[...Array(currentReview.rating)].map((_, index) => (
            <AiFillStar key={index} color="#DCCA87" size={20} />
          ))}
        </div>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote_image" />
            <p className="p__opensans">
              "{currentReview.review}"
            </p>
          </div>
        </div>

        <div className="app__chef-sign">
          <p>{currentReview.name}</p>
        </div>

        <div className="app__chef-dots">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chef;
