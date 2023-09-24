import { Link } from "react-router-dom";
import portwebimg from "../images/portwebimg.png";
import AIimg from "../images/AI_img.png";
import EZHotelimg from "../images/EZHotel_img.png";
import BlogComponent from "./BlogComponent.js";
const Projects = () => {
  //function to make a card to display works
  function WorkCard(cardTitle, cardImage, cardText, cardImageText) {
    return (
      <div className="card">
        <img src={cardImage} className="card-img-top" alt={cardImageText} />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardText}</p>
          <a href="./BlogComponent.js">More Info</a>
        </div>
      </div>
    );
  }

  return (
    <div className="sectionAnim projects">
      <div className="workCards">
        {WorkCard(
          "Personal Portfolio",
          portwebimg,
          "Simple portfolio website using React.JS",
          "Portfolio Website Image"
        )}
        {WorkCard(
          "EZHotel",
          EZHotelimg,
          "Hotel booking website using React.JS and integrating a PostgreSQL database",
          "EZHotel Website Image"
        )}
        {WorkCard(
          "AI Assistant",
          AIimg,
          "AI assitant built with Python integrates WhisperAI, ChatGPT API, Google's TTS and other technologies",
          "AI Assistant Image"
        )}
      </div>
    </div>
  );
};

export default Projects;
