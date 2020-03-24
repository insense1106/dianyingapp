<template>
  <div>
    <ul class="nav">
      <router-link
        :to="item.route_path"
        class="item"
        tag="li"
        v-for="(item, index) in nav_list"
        :key="index"
        ><span>{{ item.name }}</span></router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar_router_link",
  components: {},
  props: {
    nav_list: {
      type: Array,
      default() {
        return [
          { name: "home", route_path: "/home" },
          { name: "dog", route_path: "/dog" },
          { name: "cat", route_path: "/cat" },
          { name: "semon", route_path: "/semon" }
        ];
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.nav
  padding 0
  position fixed
  margin 0
  bottom 0
  width 100%
  display flex
  justify-content space-between
  background-color red
  .item
    height 40px
    list-style none
    background-color #3f4f5f
  .router-link-active
    background-color blue
    font-size 26px
</style>
