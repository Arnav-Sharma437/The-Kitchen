import React from "react";

import { images } from "../../constants";
import "./Policy.css";

const Policy = () => (
  <div className="app__policy app__bg flex__center section__padding" id="policy">
    <div className="app__policy-content">
      <div className="app__policy-section">
        <h1 className="headtext__cormorant">Privacy Policy</h1>
        <img src={images.spoon} alt="policy_spoon" className="spoon__img" />
        <p className="p__opensans">
          At THE KITCHEN, we value your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or dine with us. We only collect personal data that is necessary for providing the best service, such as contact details for reservations or loyalty programs. Your information will never be shared with third parties without your consent, and we take all reasonable measures to ensure it remains secure. For more detailed information or questions, please don't hesitate to reach out.
        </p>
      </div>

      <div className="app__policy-section">
        <h1 className="headtext__cormorant">Terms and Conditions</h1>
        <img src={images.spoon} alt="policy_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to THE KITCHEN. By accessing our website and services, you agree to the following Terms and Conditions. All content on our site is protected by copyright and may not be reproduced without permission. Reservations made through our website are subject to availability and our cancellation policy. We reserve the right to update or modify these terms at any time without prior notice. By continuing to use our services, you accept the most current version of these terms. For any further inquiries or concerns, please contact us directly.
        </p>
      </div>
    </div>
  </div>
);

export default Policy;
