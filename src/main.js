import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import lazyPlugin from "vue3-lazy"; // 图片懒加载插件

// 引入全局样式文件
import "@/assets/scss/index.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(lazyPlugin, {
    location: require("@/assets/images/default.png"),
  })
  .mount("#app");

// createApp(App).use(store).use(router).use(lazyPlugin, {
//   loading: require('@/assets/images/default.png')
// }).directive('loading', loadingDirective).directive('no-result', noResultDirective).mount('#app')
