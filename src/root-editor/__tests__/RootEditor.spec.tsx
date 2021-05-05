import React from "react";
import { mount } from "@cypress/react";
import {
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_PARAGRAPH,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
} from "@udecode/slate-plugins";
import { RootEditor } from "..";

function withMark(mark: string) {
  return [
    {
      type: ELEMENT_PARAGRAPH,
      children: [
        {
          text: "HeLlsff zeg zeg rego",
          [mark]: true,
        },
      ],
    },
  ];
}

function withElement(el: string) {
  return [
    {
      type: el,
      children: [
        {
          text: "HeLslo",
        },
      ],
    },
  ];
}

describe("test active plugin", () => {
  [
    { key: MARK_BOLD, selector: "strong" },
    { key: MARK_CODE, selector: "code" },
    { key: MARK_ITALIC, selector: "em" },
    { key: MARK_STRIKETHROUGH, selector: "s" },
    { key: MARK_SUBSCRIPT, selector: "sub" },
    { key: MARK_SUPERSCRIPT, selector: "sup" },
    { key: MARK_UNDERLINE, selector: "u" },
  ].forEach((x) =>
    it(`test mark: ${x.key}`, () => {
      mount(<RootEditor initialValue={withMark(x.key)} />);
      cy.get(x.selector).should("have.length", 1);
    })
  );

  [
    { key: ELEMENT_PARAGRAPH, selector: "p" },
    { key: ELEMENT_H1, selector: "h1" },
    { key: ELEMENT_H2, selector: "h2" },
    { key: ELEMENT_H3, selector: "h3" },
    { key: ELEMENT_H4, selector: "h4" },
    { key: ELEMENT_H5, selector: "h5" },
    { key: ELEMENT_H6, selector: "h6" },
    { key: ELEMENT_BLOCKQUOTE, selector: "blockquote" },
    { key: ELEMENT_CODE_BLOCK, selector: "pre > code" },
    // { key: ELEMENT_H1, selector: "h1" },
  ].forEach((x) =>
    it(`test element: ${x.key}`, () => {
      mount(<RootEditor initialValue={withElement(x.key)} />);
      cy.get(x.selector).should("have.length", 1);
    })
  );
});
export {};
