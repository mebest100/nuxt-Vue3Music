<template>
  <!-- <NuxtWelcome /> -->
  <!-- <NuxtPage ></NuxtPage>  -->
  <!-- NuxtPage相当于vue中router-view，用来在当前页面展示子路由页面的内容  -->
  <!-- <NuxtPage></NuxtPage> -->

  <v-header />
  <v-tab />
  <router-view :style="viewStyle" v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <router-view :style="viewStyle" name="user" v-slot="{ Component }">
      <transition appear name="slide">
        <component :is="Component" />
      </transition>
    </router-view> 

   <client-only>
     <player />
   </client-only>

  <!-- <router-view></router-view> -->
</template>  

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
// import { Player, VHeader, VTab } from "@/components";

export default defineComponent({
  // name: "App",
  // components: {
  //   VHeader,
  //   VTab,
  //   Player,
  // },
  setup() {    
    onMounted(() => {
      console.log("app mounted。。。");
    });

    const store = useStore();

    console.log("playList length => ", store.state.playList.length);
    const playList = computed(() => store.state.playList);
    const viewStyle = computed(() => {
      const bottom = playList.value.length > 0 ? "60px" : "0";
      return {
        bottom,
      };
    });

    return { viewStyle };
  },
});
</script>

<style type="text/css" lang="less">
html {
  overflow: hidden;
}
</style>

