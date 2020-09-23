---
title: "Overview"
description: "An overview of what Sriracha is and hopes to accomplish."
---

## Overview

### Style Props and Maps

Sriracha UI comes with some unique style props and maps that make laying out and editing you page very easy.

Style props need to be given a value and the associated style maps edit default values by adding them to a component.

Style props, work like so:

```jsx
/*
  The prop "sqr" adjusts the width and height
  simultaneously to make a square div. The bg prop
  adjusts the background color.
*/
<Box sqr="5rem" bg="red6" />
```

Style maps work a little different. By adding a
single prop, you can change the default value(s)
of certain properties.

```jsx
/*
  Adding jcc is the same as adding
  justify="center" to the component. Adding
  stretch adjusts the width to 100%.
*/
<Flex jcc stretch />
```

Most of the components in Sriracha use similar
"bases". Below I'll break down each of these bases.
Different components have different combinations of
these bases, and sometimes the bases will contain
default values that are different from one another
in order the help each component maintain a level of
uniqueness. In all cases, these values can easily be
modified.

## Flex-base

### Flex Props

| CSS Property Name | Prop Name |
| ----------------- | --------- |
| flex-direction    | direction |
| justify-content   | justify   |
| align-items       | align     |
| align-content     | content   |

Example:

```jsx
<Flex direction="column" align="center">
  ...
</Flex>
```

### Flex Style Maps

| CSS Property Name | Style Prop | Property Value |
| ----------------- | ---------- | -------------- |
| flex-wrap         | wrap       | wrap           |
| flex-direction    | col        | column         |
| flex-direction    | revrow     | row-reverse    |
| flex-direction    | revcol     | column-reverse |
| justify-content   | jcc        | center         |
| justify-content   | jcb        | space-between  |
| justify-content   | jca        | space-around   |
| justify-content   | jcv        | space-evenly   |
| justify-content   | jcs        | flex-start     |
| align-items       | aic        | center         |
| align-items       | ais        | flex-start     |
| align-items       | aie        | flex-end       |
| align-items       | aiStr      | stretch        |
| align-content     | acc        | center         |
| align-content     | acs        | flex-start     |
| align-content     | ace        | flex-end       |
| align-content     | acb        | space-between  |
| align-content     | aca        | space-around   |
| align-content     | acv        | space-evenly   |
| flex-direction    | drape      | column         |
| align-items       | drape      | center         |

Example:

```jsx
/*
  `col` changes flex-direction to column
  `aic` changes align items to center
*/
<Flex col aic>...</Flex>
// `drape` changes flex-direction to column and align-items to center
<Flex drape>...</Flex>
```

Some components flex properties are set to drape by default. To undo this behavior, just add the prop: `across`.

## Size Base

### Size Props

| CSS Property Name | Prop Name |
| ----------------- | --------- |
| width && height   | sqr       |
| height            | h         |
| width             | w         |
| margin            | m         |
| padding           | p         |
| min-height        | minH      |
| max-width         | maxW      |
| min-width         | minW      |
| max-height        | maxH      |

Size props are designed to work with a theme objects! Sriracha comes with a default theme baked right in! It's very heavily inspired by Material UI's theme, with my own twist. There is a key named `space` on the theme object these components can work with. The default space props is: `space: [ "0", "0.4rem", "0.8rem", "1.6rem", "3.2rem", "6.4rem", "12.8rem", "25.6rem", "51.2rem", "88rem", ]`.

Example:

```jsx
// Box with a width of 88rem (880px) and a height of 3.2rem (32px) and a max width of 96%
<Box w={9} maxW="96%" h={4} />

// Same sized box without using default theme
<Box w="88rem" maxW="96%" h="3.2rem" />
```

### Size Style Maps

| CSS Property Name | Style Prop | Property Value |
| ----------------- | ---------- | -------------- |
| width             | stretch    | 100%           |

## Style-base

### Style Props

| CSS Property Name | Prop Name |
| ----------------- | --------- |
| border            | border    |
| border-style      | bs        |
| border-width      | bw        |
| border-color      | bc        |
| border-radius     | radius    |
| opacity           | opacity   |
| box-shadow        | shadow    |
| background        | bg        |
| color             | color     |
| overflow          | overflow  |
| clip-path         | clip      |

### Style Maps

| CSS Property Name  | Style Prop | Property Value   |
| ------------------ | ---------- | ---------------- |
| box-shadow         | shade      | theme.shadows[5] |
| box-shadow         | sink       | theme.shadows[5] |
| (hover) box-shadow | sink       | theme.shadows[2] |
| overflow           | visible    | visible          |
| overflow           | scroll     | scroll           |
| overflow           | auto       | auto             |

## Background-base

### Background Props

| CSS Property Name   | Prop Name |
| ------------------- | --------- |
| background-size     | bgSize    |
| background-attach   | bgSize    |
| background-position | bgSize    |

### Background Maps

| CSS Property Name | Prop Name     |
| ----------------- | ------------- |
| background-size   | sizeLen       |
| background-size   | sizeCover     |
| background-size   | sizeContain   |
| background-size   | sizeInitial   |
| background-size   | sizeInherit   |
| background-size   | sizeAuto      |
| background-attach | attachFix     |
| background-attach | attachLocal   |
| background-attach | attachInherit |
| background-attach | attachInitial |
| background-attach | attachScroll  |

## Font-base

### Font Props

| CSS Property Name | Prop Name  |
| ----------------- | ---------- |
| font-family       | font       |
| font-size         | size       |
| font-weight       | weight     |
| text-decoration   | decoration |

Sriracha UI's theme also comes with some theme font sizes:

`fontSizes: { xs: "0.4rem", sm: "0.8rem", md: "1.2rem", lg: "1.6rem", xl: "2rem", "2xl": "2.4rem", "3xl": "2.8rem", "4xl": "3.2rem", "5xl": "3.6rem", "6xl": "4rem", },`

```jsx
<Text size="lg">Some text</Text>
// is the same as:
<Text size="1.6rem">Some text</Text>
```

### Font Maps

| CSS Property Name | Style Prop | Property Value |
| ----------------- | ---------- | -------------- |
| text-align        | tar        | right          |
| text-align        | tal        | left           |
| text-align        | tac        | center         |
| text-align        | taj        | justify        |
| text-align        | taa        | justify-all    |
| text-align        | tas        | start          |
| text-align        | tae        | end            |
