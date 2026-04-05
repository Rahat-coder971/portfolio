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
                href="https://www.linkedin.com/in/raghavendra-sainy-294977368?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Raghavendra Sainy
              </a>
            </p>
            <h4>Education</h4>
          
            <p>
              Bsc in Computer Science, Thakur Shyamnarayan degree college, Mumbai University (2024-2027)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a 
              href="mailto:sainiraghavendra2@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="https://github.com/Raghavs106"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/raghavendra-sainy-294977368?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            
         
            <a
              href="https://www.instagram.com/_.raghavvvv_?igsh=NXduanA0ajk4dTQz"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Raghavendra Sainy</span>
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
