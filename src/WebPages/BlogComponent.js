import "../CSS_files/BlogCSS.css";
import image1 from "../images/AI_img.png";
import image2 from "../images/portwebimg.png";
import image3 from "../images/EZHotel_img.png";

const BlogComponent = () => {
  function BlogContent({ title, imageUrl, content }) {
    return (
      <div className="blogPage">
        <h1 className="title">{title}</h1>

        <img src={imageUrl} alt="Project" className="projectImage" />

        <div className="blogText">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    );
  }

  const content1 = [
    "This project is built using Python and incorporates cutting-edge technologies.I have implemented Text-to-Speech (TTS), Speech-to-Text (STT), and word detection to create a responsive and intelligent voice assistant.",
    "As of now the voice assistant can understand and respond to user commands. It uses OpenAI's Whisper Speech-to-Text API to convert speech to text. Then the text is given as prompt to OpenAI's GPT-4 model to generate a response back. It then uses Google's Text-to-Speech API to convert the response to speech. It can speak five languages as of now. I have used Picovoice's Porcupine wake word engine to detect the wake word 'Jarvis'.",
    "I'm planning to give the assistant more functionalities such as playing music, searching the web, sending/reading emails and many more. I'm also planning to use ElevenLabs Voice model because it is more human like and make the assistant more responsive and intelligent.",
  ];

  const content2 = [
    "This is a personal portfolio website that developed with React.js and CSS. The web page is responsive and can be viewed on any device. The website is hosted on Vercel.",
    "The website is designed to be simple and easy to navigate. The home page contains a brief introduction of myself and a list of my skills. The projects page contains a list of my personal projects. The contact page contains my contact information and a contact form.",
  ];

  const content3 = [
    "This is a hotel booking website that was developed with HTML, JavaScript and BootstrapCSS. The web page is responsive and can be viewed on any device. The website is hosted on Vercel.",
    "It was a team project and I was responsible for the front-end development. I used HTML, JavaScript and BootstrapCSS to develop the website. I also integrated a PostgreSQL database to store the hotel's information and the user's booking information.",
    "The website is designed to be simple and easy to navigate. The home page contains a brief introduction of the hotel and a list of the hotel's features. The booking page contains a list of available rooms and a booking form. The contact page contains the hotel's contact information and a contact form.",
  ];

  return (
    <div className="blog_content">
      <BlogContent
        title="Voice Assistant Project"
        imageUrl={image1}
        content={content1}
      />
      <BlogContent
        title="Personal Portfolio Website"
        imageUrl={image2}
        content={content2}
      />
      <BlogContent
        title="EHotel Website Project"
        imageUrl={image3}
        content={content3}
      />
    </div>
  );
};

export default BlogComponent;
