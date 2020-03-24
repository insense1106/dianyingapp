<template>
  <div class="tabbar-wrapper">
    <div class="item-city ">
      <select @change="select" name="city" id="city">
        <option>哈尔滨</option>
        <option>齐齐哈尔</option>
        <option>乌鲁木齐</option>
      </select>
    </div>
    <div
      class="item"
      v-for="(item, index) in tabbar_list"
      :key="index"
      @click="router_push(item.path, index)"
      :class="{ current_item: index === current_index }"
    >
      <span>{{ item.title }}</span>
    </div>
    <div class="item-search ">
      <i class="icon-camera"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  components: {},
  props: {
    tabbar_list: {
      type: Array,
      default() {
        return [
          { title: "title", path: "/home2" },
          { title: "title", path: "/home3" }
        ];
      }
    }
  },
  data() {
    return { current_index: 0 };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    router_push(path, index) {
      console.log(path);
      this.current_index = index;
      this.$router.push(path);
    },
    select(e) {
      console.log(e.target.value);
      this.$router.push("/Home/city");
    }
  }
};
</script>

<style lang="stylus" scoped>
.tabbar-wrapper
    display flex
    justify-content space-between
    .item
        text-align center
    .item-search
        padding-right 20px
    .current_item
        background-color red
</style>
