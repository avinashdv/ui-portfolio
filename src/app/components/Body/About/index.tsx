import { Text, Box } from "@chakra-ui/react";
import Work from "./Work";
import HeadingTitle from "../../HeadingTitle";
export default function About() {
  return (
    <Box w={{ base: "100%", lg: "68%" }} id="portfolio-about">
      <HeadingTitle title="about me" bgTitle="about me" />

      <Text mt="4" fontSize={{ base: "2xl", xl: "4xl" }}>
        Software Engineer
      </Text>
      <Text
        mt="4"
        fontSize={"sm"}
        color="rgb(33, 37, 41)"
        lineHeight={"27.84px"}
      >
        Avinash is an experienced software engineer building scalable systems on
        backend, developing high performant UI on frontend. Open Source
        contributor, learning tech, posting blogs & giving back to community
      </Text>
      <Work />
    </Box>
  );
}
