<template>
  <div id="app">
    <Header :newsData="newsData" />
  </div>
</template>

<script>
import api from "./api";
import Header from "./components/Header.vue";
export default {
  name: "App",
  data() {
    return {
      newsData: [],
    };
  },
  components: {
    Header,
  },
  mounted() {
    api.getNews({}).then((res) => {
        console.log(res.data);
        this.newsData = res.data;
        console.log(1111);
      });
  },
};
</script>

<style>
</style>
