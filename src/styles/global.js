import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  /*! normalize.css v3.0.2 | MIT License | git.io/normalize */

  /**
  * 1. Set default font family to sans-serif.
  * 2. Prevent iOS text size adjust after orientation change, without disabling
  *    user zoom.
  */

  html {
    font-family: sans-serif; /* 1 */
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  body {
    background: ${(props) => props.theme.colors.background};
    font-family: "Noto Sans KR";
    color: #333;
    margin: 0;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block; /* 1 */
    vertical-align: baseline; /* 2 */
  }


  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden],
  template {
    display: none;
  }

  a {
    color: ${(props) => props.theme.colors.highlight};
    text-decoration: none;
    transition: .2s;
    :focus{
      outline: none;
    }
  }
  a:active,
  a:hover {
    outline: 0;
  }
  abbr[title] {
    border-bottom: 1px dotted;
  }

  b,
  strong {
    font-weight: bold;
  }

  dfn {
    font-style: italic;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  ul {
    padding-left: 23px;
  }

  mark {
    background: #ff0;
    color: #000;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  img {
    border: 0;
  }

  /**
  * Correct overflow not hidden in IE 9/10/11.
  */

  svg:not(:root) {
    overflow: hidden;
  }

  /* Grouping content
    ========================================================================== */

  /**
  * Address margin not present in IE 8/9 and Safari.
  */

  figure {
    margin: 1em 40px;
  }

  hr {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: "Roboto Mono", monospace;
    font-size: 0.95em;
  }

  pre {
    overflow: auto;
  }

  code {
    background-color: #D9FCDB;
    padding: 0.15em 0.4em;
    margin: 0.2em;
    border-radius: 4px;
    font-size: 0.85em;
    font-weight: 500;
  }

  blockquote {
    background-color: ${props => props.theme.colors.whiteSmoke};
    border-radius: 10px;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-block-start: 1em;
    padding-block-end: 1em;
    padding-inline-start: 40px;
    padding-inline-end: 40px;
    p {
      margin: 0;
    }
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit; /* 1 */
    font: inherit; /* 2 */
    margin: 0; /* 3 */
  }

  button {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html input[type="button"], /* 1 */
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button; /* 2 */
    cursor: pointer; /* 3 */
  }


  button[disabled],
  html input[disabled] {
    cursor: default;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  input {
    line-height: normal;
  }

  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  input[type="search"] {
    -webkit-appearance: textfield; /* 1 */
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box; /* 2 */
    box-sizing: content-box;
  }
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    border: 0; /* 1 */
    padding: 0; /* 2 */
  }

  textarea {
    overflow: auto;
  }
  optgroup {
    font-weight: bold;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }
`;
export default globalStyle;