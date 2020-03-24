<template>
  <div class="about-root">
    <div class="header">
      <router-link tag="div" to="#">Title</router-link>
      <router-link tag="div" to="#">Title</router-link>
      <router-link tag="div" to="#">Title</router-link>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <span class="name">
            {{ item.name }}
          </span>
          <img src="./logo.png" alt="#" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  components: {},
  props: {
    list: {
      type: Array,
      default() {
        return [
          {
            name: "name"
          },
          {
            name: "name"
          },
          {
            name: "name"
          },
          {
            name: "name"
          }
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
.header
  display flex
  text-align center
  justify-content space-between
  outline 1px solid
  & div
    background-color yellow
</style>
