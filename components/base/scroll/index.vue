<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useScroll } from "@/components/base/scroll/use-scroll";

export default defineComponent({
  name: "Scroll",
  props: {
    click: {
      type: Boolean,
      default: true,
    },
    probeType: {
      type: Number,
      default: 0,
    },
  },
  emits: ["scroll"],
  setup(props, { emit }) {
    if (process.client) {      
      // 仅在浏览器环境才执行组件代码    
        const rootRef = ref<HTMLDivElement>(document.createElement("div"));
        const scroll = useScroll(rootRef, props, emit);
        return {
          rootRef,
          scroll,
        };      
    }
  },
});
</script>
