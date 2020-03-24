<template>
  <div class="tabbar-root">
    <div class="title-wrapper   ">
      <span class="title-content">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "header2",
  components: {},
  props: {
    title: {
      type: String,
      default() {
        return "标题";
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
.tabbar-root
  margin-bottom 40px
.title-wrapper
    position fixed
    top 0
    width 100%
    text-align center
    background-color red
    .title-content
        font-size 30px
        background-color yellow
</style>
