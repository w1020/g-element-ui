<template>
  <div class="g-checkbox-group" @change="$emit('change')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'g-checkbox-group',
  props: {
    value: {
      type: Array
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  },
  provide() {
    return {
      checkboxGroup: this
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
