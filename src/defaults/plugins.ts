import {
  createReactPlugin,
  createHistoryPlugin,
  createBasicMarkPlugins,
  createBasicElementPlugins,
} from "@udecode/slate-plugins";

export const defaultPlugins = [
  /* Required */
  createReactPlugin(),
  createHistoryPlugin(),

  /* marks */
  ...createBasicMarkPlugins(),

  /* elements */
  ...createBasicElementPlugins(),
];
