<template>
  <div>
    <div>每日精选: {{ info }}</div>
    <div id="joke">每日笑话: {{ joke }}</div>
    <router-link to="/parent/childOne">child1</router-link> ||
    <router-link to="/parent/childTwo">child2</router-link>
    <h1>这里是 父组件页面</h1>
    <p>
      来自vuex的state测试信息==》 <span style="color: red">{{ msg }}</span>
    </p>
  </div>
  <!-- 子页面的出口-->
  <router-view></router-view>
</template>


<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
import RecommendServer from "@/api/recommend";

onMounted(() => {
  console.log("Parent mounted and execute getRecommend......");
  RecommendServer.getRecommend().then((resp) => {
    console.log("resp=>", resp);
  });
});

const store = useStore();
const msg = computed(() => store.state.info);

const { data: info } = await useAsyncData("info", () => $fetch("/getinfo"));
const { data: joke } = await useAsyncData("joke", () => $fetch("/getjoke"));

// useNuxtApp().vueApp.use()
</script>


<style scoped>
#joke {
  margin-top: 20px;
  margin-bottom: 20px;
  color: blue;
}
</style>



