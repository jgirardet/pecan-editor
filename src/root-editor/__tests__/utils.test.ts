import { Layout } from "../../../src/config";
import {
  createSlatePluginsOptions,
  MARK_BOLD,
  MARK_UNDERLINE,
} from "@udecode/slate-plugins";
import { replaceHotkeys } from "../utils";
import { expect } from "chai";

describe("replaceHotkeys", () => {
  it("test replace hotkeys", () => {
    const layout: Layout = {
      name: "rien",
      hotkeys: { [MARK_BOLD]: { hotkey: "mod+X" } },
    };
    const opts = replaceHotkeys(createSlatePluginsOptions(), layout);
    expect(opts[MARK_BOLD].hotkey).equal("mod+X");
    expect(opts[MARK_UNDERLINE].hotkey).equal(undefined);
  });
});
