<template>
  <label class="g-checkbox" :class="labelStyle">
    <span class="g-checkbox__input" :class="activeStyle">
      <span class="g-checkbox__inner"></span>
      <input
        type="checkbox"
        class="g-checkbox__original"
        v-model="checkboxValue"
        @change="$emit('change')"
        :value="label"
        :disabled="disabled || this.checkboxGroup.disabled"
      />
    </span>
    <span class="g-checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'g-checkbox',
  props: {
    value: {
      type: [Boolean, Array, String, Number]
    },
    label: {
      type: [String, Number, Boolean]
    },
    trueLabel: {
      type: [Number, String]
    },
    falseLabel: {
      type: [Number, String]
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
    checkboxGroup: {
      default: ''
    }
  },
  computed: {
    checkboxValue: {
      get() {
        if (this.checkboxGroup) {
          return this.checkboxGroup.value
        } else {
          let { trueLabel, falseLabel } = this
          if (!Array.isArray(this.value) && (trueLabel || falseLabel)) {
            if (this.value === trueLabel) {
              return true
            } else if (this.value === falseLabel) {
              return false
            } else if (typeof this.value === 'boolean') {
              return this.value
            } else {
              return false
            }
          } else {
            if (Array.isArray(this.value) || typeof this.value === 'boolean') {
              return this.value
            } else {
              return false
            }
          }
        }
      },
      set(value) {
        if (this.checkboxGroup) {
          this.checkboxGroup.$emit('input', value)
        } else {
          let { trueLabel, falseLabel } = this
          if (!Array.isArray(value) && (trueLabel || falseLabel)) {
            value ? this.$emit('input', trueLabel) : this.$emit('input', falseLabel)
          } else {
            this.$emit('input', value)
          }
        }
      }
    },
    labelStyle() {
      let style = []
      if (Array.isArray(this.checkboxValue)) {
        this.checkboxValue.includes(this.label) ? style.push(`is-checked`) : null
      } else {
        this.checkboxValue ? style.push(`is-checked`) : null
      }
      this.disabled || this.checkboxGroup.disabled ? style.push(`is-disabled`) : null
      this.border ? style.push(`is-bordered`) : null
      if (this.border) {
        if (this.checkboxGroup.size) {
          style.push(`g-checkbox--${this.checkboxGroup.size}`)
        } else if (this.size) {
          style.push(`g-checkbox--${this.size}`)
        }
      }
      return style
    },
    activeStyle() {
      let style = []
      if (Array.isArray(this.checkboxValue)) {
        this.checkboxValue.includes(this.label) ? style.push(`is-checked`) : null
      } else {
        this.checkboxValue ? style.push(`is-checked`) : null
      }
      this.disabled || this.checkboxGroup.disabled ? style.push(`is-disabled`) : null
      return style
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
