import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/rahat-husain-khan-455634251/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Rahat Husain Khan
              </a>
            </p>
            <h4>Education</h4>
          
            <p>
              B.E. in Information Technology, Shree Rayeshwar Institute of Engineering and Information Technology (2022–2026)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a 
              href="mailto:rahathusainkhan483@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="https://github.com/Rahat-coder971"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rahat-husain-khan-455634251/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rahat Husain Khan</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
