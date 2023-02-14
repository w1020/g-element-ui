<template>
  <div class="g-radio-group" @change="$emit('change')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'g-radio-group',
  props: {
    value: {
      type: [String, Number, Boolean]
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
      radioGroup: this
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
