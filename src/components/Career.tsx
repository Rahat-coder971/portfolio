import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> Experience
        </h2>

        {/* Entry 1 — Internship */}
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h5>Software Development Intern</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              SJ Innovation Private Limited (July 2025 – September 2025).
              Contributed to real-world application development with
              hands-on experience in backend development, REST APIs, and
              collaborative team workflows. Understood how production-level
              applications are built, tested, and deployed in an industry
              environment.
            </p>
          </div>
        </div>

        {/* Entry 2 — Projects */}
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h5>Full-Stack Developer</h5>
              </div>
              <h3>2024 – Present</h3>
            </div>
            <p>
              Developed multiple full-stack web applications using the MERN
              stack. Implemented authentication systems, REST APIs, and
              real-time features using WebSockets. Focused on building
              scalable and user-friendly applications.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Career;
