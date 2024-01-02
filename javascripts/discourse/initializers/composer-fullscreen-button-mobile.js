import { withPluginApi } from "discourse/lib/plugin-api";
import discourseComputed from "discourse-common/utils/decorators";

export default {
  name: "composer-fullscreen-button-mobile",

  initialize() {
    withPluginApi("0.1", (api) => {
      api.modifyClass("component:composer-toggles", {
        pluginId: "composer-fullscreen-button-mobile",

        @discourseComputed("disableTextarea")
        showFullScreenButton(disableTextarea) {
          return !disableTextarea;
        }
      });
    });
  },
};
