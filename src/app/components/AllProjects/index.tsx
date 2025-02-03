import { Flex } from "@chakra-ui/react";
import Project from "../Project";

export default function AllProjects() {
  return (
    <Flex
      wrap={{ base: "nowrap", xl: "wrap" }}
      // justifyContent={"space-evenly"}
      rowGap={6}
      mx="12"
      direction={{ base: "column", xl: "row" }}
      alignItems={"center"}
    >
      <Project
        title="Recipe Route"
        about="NEXT.JS, TAILWIND CSS, EXPRESS.JS, MONGODB"
        url="/images/p1.png"
      />
      {/* <Project
        title="SoulGen"
        about="STABLE DIFFUSION, VITE, SCSS"
        url="/images/p2.jpg"
      />
      <Project
        title="HeyGen"
        about="GAN, TTS, NLP, MERN"
        url="/images/p3.jpg"
      />
      <Project
        title="Descript"
        about="GENAI, TTS, COMPUTER VISION"
        url="/images/p4.jpg"
      />
      <Project
        title="Plasbit"
        about="MERN, METEORJS, WEB3"
        url="/images/p5.jpg"
      />
      <Project
        title="Stelareum"
        about="TWIG, LAMINAS, COINBASEAPI"
        url="/images/p6.jpg"
      /> */}
    </Flex>
  );
}
