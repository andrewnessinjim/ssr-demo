"use client";

import styled from "@emotion/styled";

const ArticleWrapper = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: 4rem 1.5rem 6rem;
  line-height: 1.75;
  color: #e4e4e7;
  background: #09090b;
  border-radius: 1rem;
  font-family: Arial, Helvetica, sans-serif;

  h1,
  h2,
  h3 {
    color: #f4f4f5;
    font-weight: 700;
    line-height: 1.2;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p,
  li,
  figcaption,
  footer,
  blockquote {
    color: #d4d4d8;
  }

  p {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  blockquote {
    margin: 2em 0;
    padding-left: 1rem;
    border-left: 3px solid #60a5fa;
    font-style: italic;
  }

  ul {
    padding-left: 1.5rem;
  }
`;

export default ArticleWrapper;