import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Creating a global style */
  body {
    background: #ece8e1;
    font-family: "DIN Next LT Pro", Arial, sans-serif;
  }

  /* font configuration */ 
  @font-face {
    font-family: 'Tungsten';
    src: url('fonts/Tungsten-Bold.woff2') format('woff2'),
        url('fonts/Tungsten-Bold.woff') format('woff'),
        url('fonts/Tungsten-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Tungsten';
    src: url('fonts/Tungsten-Bold_1.woff2') format('woff2'),
        url('fonts/Tungsten-Bold_1.woff') format('woff'),
        url('fonts/Tungsten-Bold_1.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Tungsten';
    src: url('fonts/Tungsten-Bold_2.woff2') format('woff2'),
        url('fonts/Tungsten-Bold_2.woff') format('woff'),
        url('fonts/Tungsten-Bold_2.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    src: local('DIN Next LT Pro Medium'), local('DIN-Next-LT-Pro-Medium'),
        url('fonts/DINNextLTPro-Medium.woff2') format('woff2'),
        url('fonts/DINNextLTPro-Medium.woff') format('woff'),
        url('fonts/DINNextLTPro-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    src: local('DIN Next LT Pro Light'), local('DIN-Next-LT-Pro-Light'),
        url('fonts/DINNextLTPro-Light.woff2') format('woff2'),
        url('fonts/DINNextLTPro-Light.woff') format('woff'),
        url('fonts/DINNextLTPro-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    src: local('DIN Next LT Pro Bold'), local('DIN-Next-LT-Pro-Bold'),
        url('fonts/DINNextLTPro-Bold.woff2') format('woff2'),
        url('fonts/DINNextLTPro-Bold.woff') format('woff'),
        url('fonts/DINNextLTPro-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`;
