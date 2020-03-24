<template>
  <div id="app">
    <title-bar :title="title" />
    <nav-bar :nav_list="list" />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import navbar_router_link from "@/components/navbar_router_link";
import header from "@/components/header";
export default {
  name: "app",
  components: { "nav-bar": navbar_router_link, "title-bar": header },
  props: {},
  data() {
    return {
      list: [
        { name: "电影", route_path: "/Home" },
        { name: "影院", route_path: "/About" },
        { name: "我的", route_path: "/user" }
      ],
      title: "喵喵电影"
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    router_push() {}
  }
};
</script>
<style lang="stylus" scoped></style>
