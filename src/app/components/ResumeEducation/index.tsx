"use client";
import { Text, Flex, Box } from "@chakra-ui/react";
import HeadingTitle from "../HeadingTitle";
import Education from "./Education";

export default function ResumeEducation() {
  return (
    <Box
      boxShadow={"0 8px 26px 0 rgba(22, 24, 26, 0.07)"}
      bgColor={"white"}
      borderRadius={"xl"}
      py="8"
      id="portfolio-resume"
    >
      <Box px="10" pt="8">
        <HeadingTitle title="resume" bgTitle="resume" />
      </Box>
      <Text
        px="10"
        pt="3"
        pb="6"
        fontWeight={500}
        fontSize={{ base: "2xl", xl: "4xl" }}
      >
        Education & Experience
      </Text>

      <Flex
        justifyContent={"space-between"}
        direction={{ base: "column", xl: "row" }}
      >
        <Box w={{ base: "100%", xl: "48%" }}>
          <Education
            year="2012 - 2016"
            title="Bachelor's Degree"
            place="ALIET"
            id="1"
          />
          <Education
            year="2025 - 2027"
            title="Master's Degree"
            place="Clemson University"
            id="2"
          />
        </Box>
        <Box w={{ base: "100%", xl: "48%" }}>
          <Education
            year="Jan 2023 - Nov 2024"
            title="Software Engineer"
            place="Geekster"
            id="2"
          />
          <Education
            year="Feb 2022 - Dec 2022"
            title="Software Developer III"
            place="Adobe"
          />
          <Education
            year="Feb 2021 - Jan 2022"
            title="Software Developer"
            place="Freelancing"
          />
          <Education
            year="July 2018 - Dec 2020"
            title="Software Developer"
            place="Bak Bak Technologies"
          />
        </Box>
      </Flex>
    </Box>
  );
}
