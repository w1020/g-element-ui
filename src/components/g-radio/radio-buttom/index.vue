<template>
  <label class="g-radio-button" :class="radioButtonStyle">
    <input type="radio" class="g-radio-button__orig-radio" :value="label" v-model="radioButtonValue" :disabled="disabled || radioGroup.disabled" @change="$emit('change')" />
    <span class="g-radio-button__inner"><slot></slot></span>
  </label>
</template>

<script>
export default {
  name: 'g-radio-button',
  inject: {
    radioGroup: {
      default: ''
    }
  },
  props: {
    value: {
      type: [String, Number, Boolean]
    },
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isGroup() {
      return this.radioGroup
    },
    radioButtonValue: {
      get() {
        return this.isGroup ? this.radioGroup.value : this.value
      },
      set(value) {
        if (this.isGroup) {
          this.radioGroup.$emit('input', value)
        } else {
          this.$emit('input', value)
        }
      }
    },
    radioButtonStyle() {
      let style = []
      this.radioButtonValue === this.label ? style.push('is-checked') : null
      this.radioGroup.size ? style.push(`g-radio-button--${this.radioGroup.size}`) : null
      return style
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
