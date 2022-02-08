import { createApp } from "vue";
import Loading from "./loading";
import { addClass, removeClass } from "@/assets/js/dom";

const relativeCls = "g-relative";

const loadingDirective = {
  mounted(el, binding) {
    // 组件挂载的钩子函数
    const app = createApp(Loading); // 创建实例
    const instance = app.mount(document.createElement("div"));
    el.instance = instance;
    const title = binding.arg;
    if (typeof title !== "undefined") {
      instance.setTitle(title);
    }
    if (binding.value) {
      append(el);
    }
  },
  updated(el, binding) {
    // 组件更新的钩子函数
    const title = binding.arg;
    if (typeof title !== "undefined") {
      el.instance.setTitle(title);
    }
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el);
    }
  },
};

function append(el) {
  const style = getComputedStyle(el); // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle
  if (["absolute", "fixed", "relative"].indexOf(style.position) === -1) {
    addClass(el, relativeCls);
  }
  el.appendChild(el.instance.$el);
}

function remove(el) {
  removeClass(el, relativeCls);
  el.removeChild(el.instance.$el);
}

export default loadingDirective;
