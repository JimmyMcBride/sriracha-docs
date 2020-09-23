---
title: "Getting started"
description: "A quick guide to getting Sriracha installed and ready to go!"
---

## Getting Started 🌶

### Installing

To install Sriracha UI to your project simply run `yarn add sriracha-ui` || `npm i sriracha-ui` and your ready to hook it up!

### CSS overhaul and AppWrapper

Sriracha UI comes with it's own css overhaul component you can import, that includes a nice subtle style overhaul and a normalize. Just import `GlobalStyles` at the top of your src/index.js! If you're using Next.js, be sure to add it too the `_app.js` file in your pages directory.

AppWrapper is a powerful component that lets you set the background and fonts of your application.

<Button red sink>Click me!</Button>

**React Example:**

```jsx
// src/App.js

import React from "react";

import { Route } from "react-router-dom";

// Initializing Sriracha UI
import { AppWrapper } from "sriracha-ui";
import "sriracha-ui/css/main.css";

import Dashboard from "./views/Dashboard";

export default function App() {
  return (
    <AppWrapper
      bgSrc={/*
        This prop lets you easily set a responsive image as your background
      */}
      bg={/* Lets you set the background color of the app */}
      headFont={/* Lets you change the font of all the headers in the app */}
      font={/* Lets you can the font of everything else in the app */}
    >
      <Route path="/" exact component={Dashboard} />
    </AppWrapper>
  );
}
```

### Next.js Example

If you want to hook up Sriracha in a Next.js app, try adding this to your `_app.js` file!

```jsx
// pages/_app.js

import App from "next/app";
import { AppWrapper, GlobalStyles } from "sriracha-ui";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppWrapper
        className="app"
        bg={/* app's background color goes here */}
        headFont={/* font-family goes here */}
        font={/* font-family goes here */}
      >
        <GlobalStyles />
        <Component {...pageProps} />
      </AppWrapper>
    );
  }
}

export default MyApp;
```

### Learn more

Go to
