import Image from "next/image";
import {
  Textarea,
  Button,
  useDisclosure,
  Slide,
  SlideFade,
  Text,
  Flex,
  Box,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<any>(null);

  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => setInput(e.target.value);

  const sendEmail = (e: any) => {
    e.preventDefault();

    console.log("form current", form.current);

    emailjs
      .sendForm("service_vbveml3", "template_eqw05pd", form.current, {
        publicKey: "V17CxmJ6Yfit05qbj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <FormControl
        p="10"
        // isInvalid={isError}
      >
        <Flex gap="4" direction={{ base: "column", md: "row" }}>
          <Input
            type="text"
            border="0"
            borderBottom={"1px dashed rgba(0, 0, 0, 0.2)"}
            onChange={handleInputChange}
            name="user_name"
            placeholder="Name"
            _focusVisible={{
              border: "0 0 1px 0",
            }}
          />
          <Input
            type="email"
            placeholder="E-Mail"
            name="user_email"
            border="0"
            borderBottom={"1px dashed rgba(0, 0, 0, 0.2)"}
            onChange={handleInputChange}
            _focusVisible={{
              border: "0 0 1px 0",
            }}
          />
        </Flex>
        <Input
          mt="12"
          type="text"
          name="subject"
          placeholder="Subject"
          border="0"
          borderBottom={"1px dashed rgba(0, 0, 0, 0.2)"}
          onChange={handleInputChange}
          _focusVisible={{
            border: "0 0 1px 0",
          }}
        />
        <Textarea
          mt="12"
          border={0}
          name="message"
          borderBottom={"1px dashed rgba(0, 0, 0, 0.2)"}
          onChange={handleInputChange}
          placeholder="Message"
          size="sm"
          _focusVisible={{
            border: "0 0 1px 0",
          }}
        />

        <Button
          bgColor="black"
          color="white"
          borderRadius={"full"}
          mt="2"
          fontWeight={"normal"}
          px="8"
          py="6"
          fontSize={{ base: "md", xl: "md" }}
          type="submit"
        >
          Send Message
        </Button>
        {/* {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )} */}
      </FormControl>
    </form>
  );
}
