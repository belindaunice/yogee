import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Heart Opening Meditation",
    description:
      "A guided meditation aimed at opening the heart chakra, fostering love and compassion within, and promoting emotional balance and connection with others.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Opening to the Flow Meditation",
    description:
      "A beginner-friendly meditation session that provides step-by-step guidance and techniques to help individuals learn the art of meditation and cultivate mindfulness.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Relaxing into Sleep Meditation",
    description:
      "A soothing meditation designed to calm the mind, release tension, and promote restful sleep by guiding you into a state of deep relaxation.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Be Here Now Meditation",
    description:
      "A meditation practice focused on cultivating heightened awareness and mindfulness through stillness and inner tranquility.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const Services = () => {
  return (
    <FullScreenSection
      backgroundColor="#D89791"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="services">
        Guided Meditations
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
          
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default Services;
