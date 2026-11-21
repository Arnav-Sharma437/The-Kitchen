import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to THE KITCHEN, your new destination for modern Pan-Asian cuisine in the heart of Chiswick. Launched on November 21st, we bring you a culinary journey that celebrates the diverse and rich flavours of Asia. With a contemporary twist on traditional recipes, we offer a dining experience that's as vibrant and dynamic as the culture we represent. Whether you're here for a casual meal or a special occasion, our dedication to excellence in food, service, and atmosphere guarantees every visit is memorable.
        </p>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Born out of a passion for authentic Pan-Asian cuisine, THE KITCHEN opened its doors on November 21st to bring the best of Asia's culinary landscape to Chiswick. Inspired by the diversity and creativity that define the region, we've set out to create a space where tradition meets innovation. From our carefully crafted menu to our stylish interiors, we aim to offer not just a meal but an experience that transports you to the streets of Asia with every bite.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
