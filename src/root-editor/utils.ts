import { SlatePluginsOptions } from "@udecode/slate-plugins";
import { Layout } from "../../src/config";

/* replaceHotKeys
Clear hotkeys ones
*/
export function replaceHotkeys(
  options: SlatePluginsOptions,
  layout: Layout
): SlatePluginsOptions {
  Object.keys(options).forEach((key) => {
    options[key] = {
      ...options[key],
      hotkey: layout.hotkeys[key]?.hotkey,
    };
  });
  return options;
}
