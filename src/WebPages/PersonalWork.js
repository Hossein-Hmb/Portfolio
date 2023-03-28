import portwebimg from "../images/portwebimg.png";
const PersonalWork = () => {
  //function to make a card to display works
  function WorkCard(cardTitle, cardImage, cardText, cardBtn, cardImageText) {
    <div className="card">
      <img src={cardImage} className="card-img-top" alt={cardImageText} />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardText}</p>
        <a href="#" className="btn btn-primary">
          {cardBtn}
        </a>
      </div>
    </div>;
  }

  return (
    <div className="personalWork">
      <div className="section__header">
        <h1 className="header">Personal Work</h1>
      </div>
      <div className="workCards">
        {WorkCard(
          "Personal Portfolio",
          { portwebimg },
          "Simple portfolio website using React.JS",
          "link",
          "Portfolio Website Image"
        )}
      </div>
    </div>
  );
};

export default PersonalWork;
