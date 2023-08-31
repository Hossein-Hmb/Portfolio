const Experience = () => {
  return (
    <div className=" sectionAnim Experience">
      <div className="section__header">
        <h1 className="header">Experience</h1>
      </div>
      <div className="experience">
        <div className="CRAdiv">
          <div className="jobInfo">
            <div className="jobCompany">
              <span>Canada Revenu Agency</span>
            </div>
            <div className="jobTitle">IT Developer Student</div>
            <div className="jobDuration">
              <span>Jan 2022 - May 2022</span>
            </div>
          </div>
          <div className="jobParagraph">
            <p>
              During my internship at the CRA, I learned about COBOL and Job
              Control Language (JCL). I assisted the team in maintaining COBOL
              programs and JCL panels to ensure that no problems occur during
              their compilation. I also documented the statistics of various
              benefit programs for clients. I had the chance to work with
              different people and communicate throughout my time there.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
