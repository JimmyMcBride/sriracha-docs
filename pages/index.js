import React from "react";
import Layout from "../components/Layout";
import { Card, Text, Flex, Span, Button } from "sriracha-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home({ toggleTheme }) {
  return (
    <Layout title="Sriracha UI 🔥" toggleTheme={toggleTheme}>
      <Card maxW={9} w="96%" shade>
        <Flex aic m="4rem 0">
          <Text color="red6" size="4xl" as="h1" tac>
            Thanks for checking out{" "}
            <Span size="4xl" font="Kaushan Script">
              Sriracha UI!
            </Span>
          </Text>
        </Flex>
        <Text w="46rem" maxW="90%" tac m="4rem 0" color="gray7">
          Sriracha UI is a style component library who's goal is to help you
          build beautiful React and Next.js applications with simplicity and
          ease.
        </Text>
        <Flex m="4rem 0">
          <Button
            as="a"
            w="15rem"
            sink
            green
            href="/docs/getting-started-with-sriracha"
          >
            Get Started
          </Button>
          <Button
            as="a"
            w="15rem"
            sink
            lightBlue
            href="https://github.com/Sriracha-UI/sriracha"
          >
            GitHub
          </Button>
        </Flex>
        <Flex stretch wrap="true" jcv m="4rem 0">
          <Card sink w="25rem" bg="gray2">
            <Text size="xl" bold>
              <FontAwesomeIcon icon="tachometer-alt" /> Fast
            </Text>
            <Text size="lg" tac>
              Sriracha UI is designed to layout your application with beautiful
              components in a quick and efficient manner.
            </Text>
          </Card>
          <Card sink w="25rem" bg="gray2">
            <Text size="xl" bold>
              <FontAwesomeIcon icon="edit" /> Customizable
            </Text>
            <Text size="lg" tac>
              Sriracha UI is highly customizable, from adding your own theme to
              overwriting any of the default values.
            </Text>
          </Card>
          <Card sink w="25rem" bg="gray2">
            <Text size="xl" bold>
              <FontAwesomeIcon icon="palette" /> Themeable
            </Text>
            <Text size="lg" tac>
              Sriracha UI comes pre-baked with a theme very similar to Material
              UI's theme that you can edit or change to your own desires.
            </Text>
          </Card>
        </Flex>
      </Card>
    </Layout>
  );
}
