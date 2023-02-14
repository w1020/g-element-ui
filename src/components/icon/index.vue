<template>
  <i :class="[iconName, iconClass]"></i>
</template>

<script>
export default {
  name: 'g-icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    iconClass: [String, Object, Array]
  },
  computed: {
    iconName() {
      return `iconfont icon-${this.name}`
    }
  }
}
</script>

<style scoped>
@import url('./iconfont/iconfont.css');
</style>
