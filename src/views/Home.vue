<template>
  <div class="home">
    <router-link class="router-link-home2" tag="div" to="/Home/home2"
      >home2</router-link
    >
    <vue-tabbar :tabbar_list="list" />

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar.vue";

export default {
  name: "Home",
  components: {
    "vue-tabbar": tabbar
  },
  data() {
    return {
      list: [
        { title: "正在热映", path: "/Home/home2" },
        { title: "即将上映", path: "/Home/home3" }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.home
  margin-top 40px
  .router-link-home2
    background-color lightblue
</style>
