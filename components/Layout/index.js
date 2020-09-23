import React from "react";
import Head from "next/head";
import {
  Wrapper,
  NavBar,
  Box,
  Flex,
  Text,
  Cabinet,
  useCabinet,
  useTheme,
} from "sriracha-ui";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery, gql } from "@apollo/client";

const GET_LINKS = gql`
  query GetLinks($name: String!) {
    getFilesInFolderByName(name: $name) {
      title
      slug
    }
  }
`;

const navHeight = "5rem";

export default function Layout({
  children,
  title = "This is the default title",
  docs,
}) {
  const { isCabinet, toggleCabinet } = useCabinet();
  const { toggleTheme, themeString, lightTheme, theme } = useTheme();
  const { colors } = lightTheme;
  const { data: docsData } = useQuery(GET_LINKS, {
    variables: {
      name: "Sriracha Docs",
    },
  });
  const { data: compData } = useQuery(GET_LINKS, {
    variables: {
      name: "Sriracha Components",
    },
  });
  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#fafafa" />
      </Head>
      <header>
        <NavBar w="100%" bg="gray0" drape shadow={3} radius="0 0 0.4rem 0.4rem">
          <Flex w="100%" jcb aic h={navHeight}>
            <Flex
              // className="nav-cabinet-menu"
              m="0 0 0 2rem"
              pointer
              aic
            >
              <Text
                size="xl"
                onClick={toggleCabinet}
                color="red6"
                // hvrColor="red8"
                hvrBg="gray2"
                p="0.2rem"
              >
                <FontAwesomeIcon
                  icon="pepper-hot"
                  size="lg"
                  // color={theme.colors.red6}
                />
              </Text>
              <Text ml="1rem" size="xl" color="red6">
                Sriracha
              </Text>
            </Flex>
            <Flex>
              <Flex
                as="a"
                href="https://github.com/Sriracha-UI/sriracha"
                onClick={toggleTheme}
                jcv
                aic
                p={1}
                mr={3}
                bg="none"
                radius="0.5rem"
                bg="none"
                hvrBg="gray2"
              >
                <FontAwesomeIcon
                  icon={["fab", "github-alt"]}
                  color={theme.colors.coolGray9}
                  size="lg"
                />
              </Flex>
              <Flex
                as="button"
                onClick={toggleTheme}
                jcv
                aic
                p={1}
                mr={3}
                bg="none"
                radius="0.5rem"
                bg="none"
                hvrBg="gray2"
              >
                {themeString === "dark" ? (
                  <FontAwesomeIcon icon="sun" color={colors.amber3} size="lg" />
                ) : (
                  <FontAwesomeIcon
                    icon="moon"
                    color={colors.deepPurple8}
                    size="lg"
                  />
                )}
              </Flex>
            </Flex>
          </Flex>
        </NavBar>
      </header>
      <Cabinet active={isCabinet} toggle={toggleCabinet} shade>
        <Flex drape h="100%" stretch>
          <NavLinks
            toggleCabinet={toggleCabinet}
            docs={docsData?.getFilesInFolderByName}
            comps={compData?.getFilesInFolderByName}
          />
        </Flex>
      </Cabinet>
      <Flex drape stretch>
        <Box h={navHeight} />
        <Box />
        {children}
      </Flex>
    </Wrapper>
  );
}
