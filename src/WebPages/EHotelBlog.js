import React from "react";
import BlogPage from "./BlogComponent";
import image1 from "../images/AI_img.png";

const EHotelBlog = () => {
  const content1 = [
    "Welcome to my Voice Assistant AI project! This project is built using Python and incorporates cutting-edge technologies such as Text-to-Speech (TTS), Speech-to-Text (STT), and word detection to create a responsive and intelligent voice assistant.",
    "The voice assistant can understand and respond to user commands, making it a versatile tool for various applications. I'm excited to share the details of this project and explore the possibilities of voice recognition technology.",
  ];

  return (
    <div>
      <BlogPage title="EHotel Project" imageUrl={image1} content={content1} />
    </div>
  );
};

export default EHotelBlog;
