import { VueConstructor } from 'vue';
import Dashboard from './VdDashboard.vue';

import { use, registerComponent } from '../../utils/plugin';

const Plugin = {
  install(Vue: VueConstructor<Vue>) {
    registerComponent(Vue, Dashboard);
  },
};

use(Plugin);

export default Plugin;

export {
  Dashboard as VdDashboard,
};
