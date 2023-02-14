<template>
  <div :class="styleInput">
    <template v-if="type === 'textarea'">
      <textarea class="g-textarea__inner" v-bind="$attrs" v-model="inputValue" :disabled="disabled"></textarea>
    </template>
    <template v-else>
      <div class="g-input-group__prepend" v-if="this.$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <template>
        <input :type="type" class="g-input__inner" v-bind="$attrs" v-model="inputValue" :disabled="disabled" ref="g_input" :style="`text-align:${textAlign}`" v-on="myListeners" />
        <span class="g-input__suffix" v-if="suffixIcon || showClear || showPassword">
          <g-icon :name="suffixIcon" v-if="suffixIcon"></g-icon>
          <span class="g-input__clear" v-if="showClear" @click="clearText"><g-icon name="CloseDefault"></g-icon></span>
          <span class="showPassword" @click="toggleEye" v-if="showPwd">
            <g-icon name="EyeInvisible" v-if="pwdVisible"></g-icon>
            <g-icon name="Eye" v-else></g-icon>
          </span>
        </span>
        <span class="g-input__prefix" v-if="prefixIcon">
          <g-icon :name="prefixIcon"></g-icon>
        </span>
      </template>
      <div class="g-input-group__append" v-if="this.$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'g-input',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    size: {
      type: String,
      default: '',
      validator: (val) => {
        return ['', 'medium', 'small', 'mini'].includes(val)
      }
    },
    type: {
      type: String,
      default: 'text'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    textAlign: {
      type: String,
      default: 'left'
    }
  },
  data() {
    return {
      pwdVisible: false
    }
  },
  methods: {
    clearText() {
      this.inputValue = ''
    },
    toggleEye() {
      this.pwdVisible = !this.pwdVisible
      if (this.pwdVisible) {
        this.$refs.g_input.type = 'text'
      } else {
        this.$refs.g_input.type = 'password'
      }
    }
  },
  computed: {
    styleInput() {
      let style = ['g-input']
      this.size ? style.push(`g-input--${this.size}`) : null
      this.suffixIcon || this.clearable ? style.push(`g-input--suffix`) : null
      this.prefixIcon ? style.push(`g-input--prefix`) : null
      this.disabled ? style.push(`is-disabled`) : null
      this.$slots.prepend || this.$slots.append ? style.push(`g-input-group`) : null
      this.$slots.prepend ? style.push(`g-input-group-prepend`) : null
      this.$slots.append ? style.push(`g-input-group-append`) : null
      return style
    },
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
    myListeners() {
      return Object.assign(this.$listeners, {
        input: (event) => this.$emit('input', event.target.value)
      })
    },
    showClear() {
      return this.clearable && this.inputValue !== ''
    },
    showPwd() {
      return this.type === 'password' && this.showPassword && this.inputValue !== ''
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
