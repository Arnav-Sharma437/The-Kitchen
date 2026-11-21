import { SubHeading } from "../../components";
import { data } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { title, subtitle }, index }) => (
  <div className="app__laurels_awards-card">
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {index + 1}. {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="What We Offer" />
      <h1 className="headtext__cormorant">Features</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award, index) => (
          <AwardCard award={award} index={index} key={award.title} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src="https://ik.imagekit.io/mv3sctrmq/The%20kitchen%20chiswick/CopyofSBS01646.JPG" alt="features_img" />
    </div>
  </div>
);

export default Laurels;
