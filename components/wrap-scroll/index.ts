import { computed, defineComponent, h, mergeProps, nextTick, ref, renderSlot, watch, withCtx } from 'vue'
import { useStore } from 'vuex'
import Scroll from '@/components/base/scroll/index.vue'
import type { Position } from '@better-scroll/slide/dist/types/SlidePages'

export default defineComponent({
  name: 'WrapScroll',
  props: Scroll.props,
  emits: Scroll.emits,
  render (ctx: any) {
    return h(Scroll, mergeProps({
      ref: 'scrollRef'
    }, ctx.$props, {
      onScroll: (e: Position) => {
        ctx.$emit('scroll', e)
      }
    }), {
      default: withCtx(() => {
        return [renderSlot(ctx.$slots, 'default')]
      })
    })
  },
  setup () {
    // 在包装组件wrap-scoll做浏览器环境判断没有用，必须在scroll根组件做这种判断！
    const store = useStore()
    const scrollRef = ref()
    const scroll = computed(() => scrollRef.value.scroll)

    const playList = computed(() => store.state.playList)

    watch(playList, async () => {
      await nextTick()
      scroll.value.refresh()
    })

    return {
      scrollRef,
      scroll
    }
  }
})
