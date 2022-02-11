<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import useScroll from "./user-scroll";
import { ref } from "vue";

export default {
  name: "scroll",
  props: {
    click: {
      type: Boolean,
      default: true,
    },
    probeType: {
      // https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html#probetype
      type: Number,
      default: 0,
    },
  },
  emits: ["scroll"],
  setup(props, { emit }) {
    const rootRef = ref(null);
    const scroll = useScroll(rootRef, props, emit);

    return {
      rootRef,
      scroll,
    };
  },
};
</script>
