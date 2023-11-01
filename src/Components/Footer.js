import "../Style/footer.css";
import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";

function Footer() {
  return (
    <div className="mid">
      <div className="foot">
        <div className="company">
          <h3>Company</h3>
          <ul>
            <li className="footerLinks">
              <a href="https://www.hotstar.com/in/about-us">About Us</a>
            </li>
            <li className="footerLinks">
              <a href="https://www.hotstar.com/in/about-us">Careers</a>
            </li>
          </ul>
          <div className="footer-para">
            <p>
              © 2023 STAR. All Rights Reserved. Terms Of Use Privacy Policy FAQ
            </p>
          </div>
        </div>

        <div className="company">
          <h3>View Website in</h3>
          <ul>
            <li className="footerLinks">
              <a href="https://www.hotstar.com/in/about-us">English</a>
            </li>
          </ul>
        </div>
        <div className="company">
          <h3>Need Help?</h3>
          <ul>
            <li className="footerLinks">
              <a href="https://www.hotstar.com/in/about-us">
                Visit Help Center
              </a>
            </li>
            <li className="footerLinks">
              <a href="https://www.hotstar.com/in/about-us">Share Feedback</a>
            </li>
          </ul>
        </div>
        <div className="company footerLogo">
          <h3>Connect with us</h3>
          <span>
            <a href="https://facebook.com/DisneyPlusHotstar">
              <span className="fb">
                <FiFacebook />
              </span>
            </a>
          </span>
          <span>
            <a href="https://twitter.com/DisneyPlusHS">
              <span className="fb">
                <LuTwitter />
              </span>
            </a>
          </span>
        </div>
        {/* <p>
          visuals and elements are the property of, Home Box Office, Inc. All
          rights reserved.
        </p> */}
      </div>
    </div>
  );
}

export default Footer;
