import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h5>Data ANALYST</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed an online Data Analyst internship 
              focused on data analysis and visualization. 
              Worked with datasets to extract insights and
              gained a basic understanding of data-driven 
              decision making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
