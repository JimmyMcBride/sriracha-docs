import React from "react";
import { Box, Text, Flex } from "sriracha-ui";
import NavLink from "./NavLink";
import Link from "next/link";

export default function NavLinks({ docs }) {
  // console.log("docs", docs);
  return (
    <>
      <Flex aic wrap="true" pointer m="1.6rem 0">
        <Link href="/" passHref>
          <Text as="a" size="xl" pointer color="gray9" hvrColor="gray5">
            Home
          </Text>
        </Link>
      </Flex>
      <Text color="gray5" size="xl" mb="1rem">
        Docs
      </Text>
      <Box stretch bg="gray5" h="0.1rem" mb="1.6rem" />
      {docs?.map((link) => (
        <React.Fragment key={link.slug}>
          <NavLink link={link} type="docs" />
          {/* <Box w="2rem" /> */}
        </React.Fragment>
      ))}
      <Text color="gray5" size="xl" mb="1rem">
        Components
      </Text>
      <Box stretch bg="gray5" h="0.1rem" mb="1.6rem" />
    </>
  );
}
