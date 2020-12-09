import { VueConstructor, PluginObject } from 'vue';

export const use = (plugin: PluginObject<any>) => {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
  }
};

export const registerComponent = (Vue: VueConstructor<Vue>, component: Record<string, any>) => {
  Vue.component(component.name, component);
};
