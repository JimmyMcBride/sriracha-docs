import React from "react";
import { Flex, Text } from "sriracha-ui";
import Link from "next/link";

export default function NavLink({ link, type }) {
  return (
    <Flex aic wrap="true" pointer mb="2rem" maxW="90%">
      <Link href={`/${type}/${link.slug}`} passHref>
        <Text as="a" size="xl" pointer color="gray9" hvrColor="gray5" tac>
          {link.title}
        </Text>
      </Link>
    </Flex>
  );
}
