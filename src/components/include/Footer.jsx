import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="default-d mb-5">
          <div className="divider"></div>
          <footer>
            <div className="row m-0">

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 p-0">
                <span className="sub-title">About Us</span>
                <ul className="p-0 mt-4">
                  <li>
                    <a>Support Center</a>
                  </li>
                  <li>
                    <a>Customer Support</a>
                  </li>
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Copyright</a>
                  </li>
                  <li>
                    <a>Popular Campaign</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 p-0">
                <span className="sub-title">Our Information</span>
                <ul className="p-0 mt-4">
                  <li>
                    <a>Return Policy</a>
                  </li>
                  <li>
                    <a>Privacy Policy</a>
                  </li>
                  <li>
                    <a>Terms & Conditions</a>
                  </li>
                  <li>
                    <a>Site Map</a>
                  </li>
                  <li>
                    <a>Store Hours</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 p-0 ">
                <span className="sub-title">My Account</span>
                <ul className="p-0 mt-4">
                  <li>
                    <a>Press inquiries</a>
                  </li>
                  <li>
                    <a>Social media</a>
                  </li>
                  <li>
                    <a>directories</a>
                  </li>
                  <li>
                    <a>Images & B-roll</a>
                  </li>
                  <li>
                    <a>Permissions</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 p-0">
                <span className="sub-title">Policy</span>
                <ul className="p-0 mt-4">
                  <li>
                    <a>Application security</a>
                  </li>
                  <li>
                    <a>Software principles</a>
                  </li>
                  <li>
                    <a>Unwanted software policy</a>
                  </li>
                  <li>
                    <a>Responsible supply chain</a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
