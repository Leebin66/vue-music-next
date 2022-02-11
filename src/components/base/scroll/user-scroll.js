import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom"; // https://better-scroll.github.io/docs/zh-CN/plugins/observe-dom.html

BScroll.use(ObserveDOM);

import { onMounted, onUnmounted, ref } from "vue";

export default function userScroll(wrapperRef, options, emit) {
  const scroll = ref(null);

  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options,
    });

    if (options.probeType > 0) {
      // 监听dom滚动事件
      scroll.value.on("scroll", (pos) => {
        emit("scroll", pos);
      });
    }
  });

  onUnmounted(() => {
    scroll.value.destroy();
  });
}
