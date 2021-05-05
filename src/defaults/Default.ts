import { Config } from "../config";
import { BaseLayout } from "./layouts";
import { defaultPlugins } from "./plugins";

export const configDefault: Config = {
  layout: BaseLayout,
  plugins: defaultPlugins,
  components: {},
};
