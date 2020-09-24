import React from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { Card, Button, Box, Flex } from "sriracha-ui";
import HighlightedMarkdown from "../../components/HighlightedMarkdown";

export default function DocsSlug({ htmlString }) {
  return (
    <Layout>
      <Card w="96%" maxW={9} tal shade>
        <HighlightedMarkdown
          options={{
            overrides: {
              Button: { component: Button },
              Box: { component: Box },
              Flex: { component: Flex },
            },
          }}
        >
          {htmlString}
        </HighlightedMarkdown>
      </Card>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const headers = {
    "Content-Type": "application/json",
    token: process.env.NEXT_PUBLIC_TOKEN,
  };
  const {
    data,
  } = await axios.get(
    `https://best-markdown-editor-be.herokuapp.com/api/published-files/folder-name/Sriracha Components`,
    { headers }
  );

  const paths = data.map((file) => ({
    params: {
      slug: file.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const headers = {
    "Content-Type": "application/json",
    token: process.env.NEXT_PUBLIC_TOKEN,
  };
  const {
    data,
  } = await axios.get(
    `https://best-markdown-editor-be.herokuapp.com/api/published-file-by-slug/${slug}`,
    { headers }
  );
  console.log("data:", data);
  return {
    props: {
      htmlString: data.body,
    },
  };
};
