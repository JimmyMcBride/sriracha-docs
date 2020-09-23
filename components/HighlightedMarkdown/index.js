import React, { useRef, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import hljs from "highlight.js";
import { styled, useTheme } from "sriracha-ui";

export default function HighlightedMarkdown({ children, ...rest }) {
  const rootRef = useRef();
  const { lightTheme } = useTheme();
  const { colors } = lightTheme;

  const Container = styled.div`
    .hljs {
      display: block;
      overflow-x: auto;
      padding: 1.6rem;
      color: ${colors.coolGray1};
      background: ${colors.coolGray9};
      width: 96%;
      border-radius: 0.4rem;
    }

    .hljs-comment,
    .hljs-quote {
      color: ${colors.gray7};
      font-style: italic;
    }

    .hljs-doctag,
    .hljs-keyword,
    .hljs-formula {
      color: ${colors.deepPurple4};
    }

    .hljs-section,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-deletion,
    .hljs-subst {
      color: ${colors.amberA7};
    }

    .hljs-literal {
      color: ${colors.teal4};
    }

    .hljs-string,
    .hljs-regexp,
    .hljs-addition,
    .hljs-attribute,
    .hljs-meta-string {
      color: ${colors.green3};
    }

    .hljs-built_in,
    .hljs-class .hljs-title {
      color: ${colors.lightBlueA4};
    }

    .hljs-attr,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-type,
    .hljs-selector-class,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-number {
      color: ${colors.orange2};
    }

    .hljs-symbol,
    .hljs-bullet,
    .hljs-link,
    .hljs-meta,
    .hljs-selector-id,
    .hljs-title {
      color: ${colors.deepOrangeA2};
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: bold;
    }

    .hljs-link {
      text-decoration: underline;
    }
  `;

  useEffect(() => {
    rootRef.current.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [children]);

  return (
    <div ref={rootRef} style={{ maxWidth: "100%" }}>
      <Markdown {...rest} className="markdown-body">
        {children}
      </Markdown>
    </div>
  );
}
