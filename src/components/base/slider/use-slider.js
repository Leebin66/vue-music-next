import BScroll from "@better-scroll/core";
import Slide from "@better-scroll/slide";

import { onMounted, onUnmounted, onActivated, onDeactivated, ref } from "vue";

BScroll.use(Slide);

export default function useSlider(wrapperRef) {
  const slider = ref(null);
  const currentPageIndex = ref(0);

  onMounted(() => {
    // wrapperRef.value 对应容器 dom 对象
    const sliderVal = (slider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      probeType: 2,
      slide: true,
    }));

    // 当前页码
    sliderVal.on("slideWillChange", (page) => {
      currentPageIndex.value = page.pageX;
    });
  });

  // 销毁
  onUnmounted(() => {
    slider.value.destroy();
  });

  onActivated(() => {
    slider.value.enable();
    slider.value.refresh();
  });

  onDeactivated(() => {
    slider.value.disable();
  });

  return {
    slider,
    currentPageIndex,
  };
}
