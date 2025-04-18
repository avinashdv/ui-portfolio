import Image from "next/image";
import { useDisclosure, SlideFade, Text, Box } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  url: string;
  about: string;
  title: string;
  link: string;
}

const Project: React.FC<Props> = ({ title, about, url, link }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w={{ base: "90%", xl: "45%" }}
      h="auto"
      borderRadius={"lg"}
      position={"relative"}
      role="group"
      onMouseOver={onOpen}
      onMouseOut={onClose}
      overflow={"hidden"}
      className="portfolio"
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        opacity: 0,
        backgroundImage:
          "linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)",
        width: "100%",
        height: "100%",
      }}
      _hover={{
        _after: {
          opacity: 1,
        },
      }}
    >
      <Box
        _groupHover={{
          transition: "ease-out 0.16s",
          transform: "scale(1.04)",
          filter: "blur(1.5px)",
        }}
      >
        <Image
          style={{
            borderRadius: "14px",
            transition: "transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
            width: "100%",
            height: "auto",
          }}
          src={url}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </Box>
      <Box
        position="absolute"
        top="5"
        right="4"
        p="2"
        backdropFilter={"blur(5px)"}
        borderRadius={"xl"}
        background={"rgba(200, 200, 200, 0.2)"}
      >
        <Text fontSize={"sm"} color="white">
          {about}
        </Text>
      </Box>
      <SlideFade in={isOpen} offsetY="15px">
        <Box zIndex={1} position="absolute" bottom="5" left="4">
          <Link target="_blank" href={link}>
            <Text
              className="text-stroke-white"
              textDecoration="underline"
              fontSize={"5xl"}
              display={"none"}
              _groupHover={{
                display: "block",
              }}
              _hover={{
                textDecoration: "none",
                WebkitTextFillColor: "white",
                cursor: "pointer",
              }}
            >
              {title}
            </Text>
          </Link>
        </Box>
      </SlideFade>
    </Box>
  );
};

export default Project;
