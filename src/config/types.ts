import {
  SlatePlugin,
  SPEditor,
  createSlatePluginsComponents,
  SlatePluginOptions,
} from "@udecode/slate-plugins";

export interface Layout {
  name: string;
  hotkeys: Record<string, Pick<SlatePluginOptions, "hotkey">>;
}

export interface Config {
  layout: Layout;
  plugins: SlatePlugin<SPEditor>[];
  components: Parameters<typeof createSlatePluginsComponents>[0];
}
