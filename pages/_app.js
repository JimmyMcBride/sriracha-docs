import { AppContainer, useDarkMode } from "sriracha-ui";
import "./styles.css";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import {
  faSun,
  faMoon,
  faCog,
  faPepperHot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  ApolloProvider,
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

import "./syntax.css";

library.add(
  faSun,
  faMoon,
  faCog,
  faPepperHot,
  faTwitter,
  faFacebook,
  faGithubAlt
);

const httpLink = new HttpLink({
  uri: "https://best-markdown-editor-be.herokuapp.com/cms",
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      token: process.env.NEXT_PUBLIC_TOKEN,
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  const { themeString, toggleTheme } = useDarkMode();
  return (
    <ApolloProvider client={client}>
      <AppContainer
        className="app"
        themeString={themeString}
        toggleTheme={toggleTheme}
      >
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </AppContainer>
    </ApolloProvider>
  );
}

export default MyApp;
