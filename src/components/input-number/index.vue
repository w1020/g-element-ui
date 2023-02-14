<template>
  <div>
    <g-input v-model.number="inputValue" text-align="center" :disabled="disabled" :size="size" @change="handleChange">
      <div slot="prepend" class="cursor_pointer" @click="handleClick('jian')" :class="jianDisabled">
        <g-icon name="jianhao"></g-icon>
      </div>
      <div slot="append" class="cursor_pointer" @click="handleClick('jia')" :class="jiaDisabled">
        <g-icon name="huaban"></g-icon>
      </div>
    </g-input>
  </div>
</template>

<script>
export default {
  name: 'g-inputNumber',
  props: {
    value: {
      type: [Number, String]
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: +Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '',
      validator: (val) => {
        return ['', 'medium', 'small', 'mini'].includes(val)
      }
    },
    precision: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleClick(type) {
      if (type === 'jia') {
        if (this.disabled) return
        this.inputValue = Number(this.inputValue) + this.step
      } else {
        if (this.disabled) return
        this.inputValue = Number(this.inputValue) - this.step
      }
    },
    isNumber(num) {
      return !isNaN(num * 1) && Object.prototype.toString.call(num * 1) === '[object Number]'
    },
    handleChange() {
      this.$forceUpdate()
    }
  },
  computed: {
    inputValue: {
      get() {
        let value = this.value
        return Number(value).toFixed(this.precision)
      },
      set(newValue) {
        let { max, min, inputValue } = this
        let limit = [
          {
            validate: (value) => !this.isNumber(value),
            res: inputValue
          },
          {
            validate: (value) => value >= max,
            res: max
          },
          {
            validate: (value) => value <= min,
            res: min
          },
          {
            validate: (value) => true,
            res: newValue
          }
        ]
        let _value = limit.find((item) => item.validate(newValue)).res
        this.$emit('input', _value.toFixed(this.precision))
      }
    },
    jianDisabled() {
      return this.disabled || this.inputValue <= this.min ? 'is-disabled' : null
    },
    jiaDisabled() {
      return this.disabled || this.inputValue >= this.max ? 'is-disabled' : null
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
