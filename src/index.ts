import { VueConstructor } from 'vue';
import * as components from './components';
import { use } from './utils/plugin';
import 'bulma/css/bulma.min.css';

const VueDashboard = {
  install(Vue: VueConstructor<Vue>) {
    // Use Components
    Object.keys(components).forEach((componentKey) => {
      Vue.use((components as Record<string, any>)[componentKey]);
    });
  },
};

use(VueDashboard);

export default VueDashboard;

export * from './components';
