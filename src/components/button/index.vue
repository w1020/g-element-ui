<template>
  <button class="g-button" :class="styleClass" @click="$emit('click')" :disabled="disabled">
    <span v-if="icon">
      <g-icon :name="icon"></g-icon>
    </span>
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'g-button',
  props: {
    type: {
      type: String,
      default: '',
      required: false,
      validator: (value) => {
        return ['', 'default', 'primary', 'success', 'info', 'warning', 'danger'].includes(value)
      }
    },
    plain: {
      type: Boolean,
      default: false,
      required: false
    },
    round: {
      type: Boolean,
      default: false,
      required: false
    },
    icon: {
      type: String,
      default: '',
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    size: {
      type: String,
      default: '',
      required: false
    }
  },
  computed: {
    styleClass() {
      let style = []
      this.type ? style.push(`g-button--${this.type}`) : style.push(`g-button--default`)
      this.plain ? style.push('is-plain') : null
      this.round ? style.push('is-round') : null
      this.disabled ? style.push('is-disabled') : null
      this.size ? style.push(`g-button--${this.size}`) : null
      return style
    }
  }
}
</script>

<style lang="less" scoped>
@import url('./style.css');
</style>
