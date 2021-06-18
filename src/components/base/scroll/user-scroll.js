import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom"; // https://better-scroll.github.io/docs/zh-CN/plugins/observe-dom.html

BScroll.use(ObserveDOM);

import { onMounted, onUnmounted, ref } from "vue";

export default function userScroll(wrapperRef, options) {
  const scroll = ref(null);

  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options,
    });
  });

  onUnmounted(() => {
    scroll.value.destroy();
  });
}
