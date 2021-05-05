import {
  MARK_BOLD,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
} from "@udecode/slate-plugins";
import {
  MARK_CODE,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
} from "@udecode/slate-plugins-basic-marks";
import { Layout } from "../../config";

export const BaseLayout: Layout = {
  name: "base",
  hotkeys: {
    [MARK_BOLD]: { hotkey: "mod+b" },
    [MARK_ITALIC]: { hotkey: "mod+i" },
    [MARK_UNDERLINE]: { hotkey: "mod+u" },
    [MARK_STRIKETHROUGH]: { hotkey: "mod+2" },
    [MARK_SUBSCRIPT]: { hotkey: "mod+o" },
    [MARK_SUPERSCRIPT]: { hotkey: "mod+d" },
    [MARK_CODE]: { hotkey: "mod+e" },
  },
};
