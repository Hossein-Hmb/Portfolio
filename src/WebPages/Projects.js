import portwebimg from "../images/portwebimg.png";
const Projects = () => {
  //function to make a card to display works
  function WorkCard(cardTitle, cardImage, cardText, cardImageText) {
    return (
      <div className="card">
        <img src={cardImage} className="card-img-top" alt={cardImageText} />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardText}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="projects">
      <div className="section__header">
        <h1 className="header">Personal Work</h1>
      </div>
      <div className="workCards">
        {WorkCard(
          "Personal Portfolio",
          portwebimg,
          "Simple portfolio website using React.JS",
          "Portfolio Website Image"
        )}
        {WorkCard(
          "EZHotel",
          "image",
          "Hotel booking website using React.JS and integrating a PostgreSQL database",
          "EZHotel Website Image"
        )}
      </div>
    </div>
  );
};

export default Projects;
