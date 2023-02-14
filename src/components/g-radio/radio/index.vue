<template>
  <label class="g-radio" :class="labelStyle">
    <span class="g-radio__input" :class="selectStyle">
      <span class="g-radio__inner"></span>
      <input
        type="radio"
        class="g-radio__original"
        :value="label"
        v-model="radioValue"
        :disabled="disabled || radioGroup.disabled"
        @change="$emit('change')"
      />
    </span>
    <span class="g-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'g-radio',
  props: {
    value: {
      type: [String, Number, Boolean]
    },
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  },
  inject: {
    radioGroup: {
      default: ''
    }
  },
  computed: {
    isRadiogroup() {
      return this.radioGroup
    },
    radioValue: {
      get() {
        return this.isRadiogroup ? this.radioGroup.value : this.value
      },
      set(value) {
        if (this.isRadiogroup) {
          this.radioGroup.$emit('input', value)
        } else {
          this.$emit('input', value)
        }
      }
    },
    labelStyle() {
      let style = []
      this.radioValue === this.label ? style.push('is-checked') : null
      this.disabled || this.radioGroup.disabled ? style.push('is-disabled') : null
      this.border ? style.push(`is-bordered`) : null
      if (this.border) {
        if (this.radioGroup.size) {
          style.push(`g-radio--${this.radioGroup.size}`)
        } else if (this.size) {
          style.push(`g-radio--${this.size}`)
        }
      }
      return style
    },
    selectStyle() {
      let style = []
      this.radioValue === this.label ? style.push('is-checked') : null
      this.disabled || this.radioGroup.disabled ? style.push('is-disabled') : null
      return style
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
