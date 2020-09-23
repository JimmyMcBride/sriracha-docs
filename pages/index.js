import React from "react";
import Layout from "../components/Layout";
import { Card, Text, Flex, Img } from "sriracha-ui";

export default function Home({ toggleTheme }) {
  return (
    <Layout title="Sriracha UI 🔥" toggleTheme={toggleTheme}>
      <Card maxW={9} w="96%" shade>
        <Flex aic>
          <Text color="red6" size="4xl" as="h1" tac font="Raleway">
            Thanks for checking out Sriracha UI!
          </Text>
          {/* <img src="/favicon-32x32.png" alt="sriracha pepper" /> */}
        </Flex>
        <Text w="46rem" maxW="90%" tac m="2rem 0" color="gray7">
          Sriracha UI is a style component library who's goal is to help you
          build beautiful React and Next.js applications with simplicity and
          ease.
        </Text>
        <Flex stretch wrap="true" jcv>
          <Card sink w="25rem">
            <Text size="xl" bold>
              Fast
            </Text>
          </Card>
          <Card sink w="25rem">
            <Text size="xl" bold>
              Customizable
            </Text>
          </Card>
          <Card sink w="25rem">
            <Text size="xl" bold>
              Themeable
            </Text>
          </Card>
        </Flex>
      </Card>
    </Layout>
  );
}
