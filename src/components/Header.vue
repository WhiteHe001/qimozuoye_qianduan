<template>
  <div class="content">
    <p class="title">词频排名</p>
    <ul v-for="(item, index) in newsData" :key="index">
      <li style="paiming">排名：{{index+1}}</li>
      <li> 序号：{{ item.id }}</li>
      <li>单词:{{ item.word }}</li>
      <li>词频：{{ item.sum }}</li>
      -------------------------------------------
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    newsData: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.content{
  text-align: center;
}
.title {
  font-size: 0.5rem;
  font-weight: 600;
}
a {
  font-size: 0.2rem;
  color: blue;
}
.paiming{
  margin-left: 2rem;
}
</style>