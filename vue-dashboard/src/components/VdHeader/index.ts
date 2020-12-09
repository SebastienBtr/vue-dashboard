import { VueConstructor } from 'vue';
import Header from './VdHeader.vue';

import { use, registerComponent } from '../../utils/plugin';

const Plugin = {
  install(Vue: VueConstructor<Vue>) {
    registerComponent(Vue, Header);
  },
};

use(Plugin);

export default Plugin;

export {
  Header as VdHeader,
};
