import { SlatePluginsProps } from "@udecode/slate-plugins";
import { Config } from "../../src/config";
export interface RootEditorProps extends SlatePluginsProps {
  config?: Config;
}
