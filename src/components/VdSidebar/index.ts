import { VueConstructor } from 'vue';
import Sidebar from './VdSidebar.vue';

import { use, registerComponent } from '../../utils/plugin';

const Plugin = {
  install(Vue: VueConstructor<Vue>) {
    registerComponent(Vue, Sidebar);
  },
};

use(Plugin);

export default Plugin;

export {
  Sidebar as VdSidebar,
};
