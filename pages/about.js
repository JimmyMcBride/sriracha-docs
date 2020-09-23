import Layout from "../components/Layout";
import { Card, Text, useTheme } from "sriracha-ui";

export default function About() {
  const { themeString, theme } = useTheme();
  return (
    <Layout title="About 📖">
      <Card
        bw="0.1rem"
        border={
          themeString === "light" ? `1px solid ${theme.colors.gray5}` : "none"
        }
        w={9}
      >
        <Text as="h1" size="5xl" color="red6" font="Raleway">
          About Page!
        </Text>
        <Text
          as="a"
          href="/"
          font="'Bellota', cursive"
          color="blue4"
          hvrColor="blue6"
          pointer
        >
          Go to the Home page.
        </Text>
      </Card>
    </Layout>
  );
}
