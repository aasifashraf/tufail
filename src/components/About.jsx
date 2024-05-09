import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* <p>NOT AVAILABLE</p> */}

        <p className="text-xl mt-5">
          Hello! My name is Tufail Ahmad Shah. I am a seasoned System Engineer
          with a strong background in Python programming. I bring several years
          of experience in designing, implementing, and maintaining complex
          systems and infrastructure. <br></br>
          My odyssey in the realm of technology began with a spark of curiosity
          and a thirst for knowledge that knew no bounds. Guided by the ethos of
          innovation and armed with a deep-seated fascination for the intricate
          dance of code and algorithms, I embarked on a journey that would lead
          me to the forefront of the digital revolution.
        </p>

        <br />

        <p className="text-xl">
          As a System Engineer, I am the architect of dreams and the guardian of
          digital fortresses, entrusted with the task of designing,
          implementing, and maintaining the intricate tapestry of systems and
          infrastructure that underpin our modern world. With a strong
          foundation in Python programming, I wield the tools of the trade with
          finesse and precision, crafting elegant solutions to complex problems
          with a mastery that is born of years of experience and dedication.{" "}
          <br />
          Over the course of my career, I have navigated the labyrinthine
          corridors of technology, from the bustling metropolises of Silicon
          Valley to the bustling streets of Mumbai. In each chapter of my
          journey, I have left an indelible mark, harnessing the power of
          technology to drive innovation, empower businesses, and enrich the
          lives of millions.
          <br />
          Whether it is architecting scalable cloud solutions, optimizing
          network performance, or fortifying cybersecurity defenses, I approach
          each challenge with a blend of creativity and pragmatism, drawing upon
          my wealth of experience to deliver results that exceed expectations.
        </p>
      </div>
    </div>
  );
};

export default About;
