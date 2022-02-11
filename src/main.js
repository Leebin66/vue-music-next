import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import lazyPlugin from "vue3-lazy"; // 图片懒加载插件
import loadingDirective from "@/components/base/loading/directive"; // 自定义loading组件
import authDirective from "@/directive/auth";

// 引入全局样式文件
import "@/assets/scss/index.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(lazyPlugin, {
    location: require("@/assets/images/default.png"),
  })
  .directive("loading", loadingDirective)
  .directive("auth", authDirective)
  .mount("#app");
