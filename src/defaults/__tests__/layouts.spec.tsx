import React from "react";
import { mount } from "@cypress/react";
import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
} from "@udecode/slate-plugins";
import { RootEditor } from "../..";

describe("test base layout", () => {
  [
    { key: MARK_BOLD, selector: "strong", hotkey: "ctrl+b" },
    // { key: MARK_CODE, selector: "code" , hotkey: "ctrl+"},
    { key: MARK_ITALIC, selector: "em", hotkey: "ctrl+i" },
    { key: MARK_STRIKETHROUGH, selector: "s", hotkey: "ctrl+2" },
    { key: MARK_SUBSCRIPT, selector: "sub", hotkey: "ctrl+o" },
    { key: MARK_SUPERSCRIPT, selector: "sup", hotkey: "ctrl+d" },
    { key: MARK_UNDERLINE, selector: "u", hotkey: "ctrl+u" },
    { key: MARK_CODE, selector: "code", hotkey: "ctrl+e" },
  ].forEach((x) =>
    it(`test mark: ${x.key}`, () => {
      mount(
        <RootEditor
          initialValue={[{ type: "paragraph", children: [{ text: "aa" }] }]}
        />
      );
      cy.get("[contenteditable]")
        .focus()
        .type("{selectAll}")
        .type(`{${x.hotkey}}`);
      cy.get(x.selector).should("have.length", 1);
    })
  );
});
