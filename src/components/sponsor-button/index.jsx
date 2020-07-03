import React from "react";
// import { SocialShare } from "./emo-post";
import "./index.scss";

export const SponsorButton = ({ sponsorId }) => (
  <div>
    <li className={"social-icon"}>
      <a target="_blank" href="https://www.instagram.com/twin.children/">
        <span className="fab fa-instagram">instagram</span>
      </a>
    </li>
    <li className={"social-icon"}>
      <a target="_blank" href="https://twitter.com/Nasa2135">
        <span className="fab fa-twitter">twitter</span>
      </a>
    </li>
    <li className={"WiCloud"}>
      <a target="_blank" href="https://www.facebook.com/ifyaa7">
        <span className="fab fa-facebook">facebook</span>
      </a>
    </li>
  </div>
);

// import React from 'react'

// import './index.scss'

// export const SponsorButton = ({ sponsorId }) => (
//   <div className="sponsor-button">
//     <a
//       className="bmc-button"
//       target="_blank"
//       rel="noopener noreferrer"
//       href={`https://www.buymeacoffee.com/${sponsorId}`}
//     >
//       <img
//         src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
//         alt="Buy me a coffee"
//       />
//       <span>Buy me a coffee</span>
//     </a>
//   </div>
// )
