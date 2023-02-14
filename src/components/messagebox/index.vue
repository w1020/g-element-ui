<template>
  <transition name="messagebox-fade" appear @after-leave="handleAfterLeave">
    <div class="g-messagebox__wrapper" v-show="visible">
      <div class="g-message-box">
        <div class="g-message-box__header">
          <div class="g-message-box__title">
            <span> {{ title }} </span>
          </div>
          <button class="g-message-box__headerbtn" @click="close('cancel')"><g-icon name="guanbi"></g-icon></button>
        </div>
        <div class="g-message-box__content">
          <div class="g-message-box__container">
            <span :class="['g-message-box__status', type && !iconClass ? `g-message-box__icon--${type}` : '']" v-if="type || iconClass"
              ><g-icon :name="iconName"></g-icon
            ></span>
            <div class="g-message-box__message">
              <p>{{ message }}</p>
            </div>
          </div>
        </div>
        <div class="g-message-box__btns">
          <g-button size="small" @click="close('cancel')">{{ cancelButtonText }}</g-button>
          <g-button type="primary" size="small" @click="close('confirm')">{{ confirmButtonText }}</g-button>
        </div>
      </div>
      <transition name="modal-fade" appear>
        <div class="v-modal" v-if="visible" @click="close('cancel')"></div>
      </transition>
    </div>
  </transition>
</template>

<script>
const typeMap = {
  info: 'info',
  success: 'yuanduigou',
  warning: 'shuoming',
  error: 'guanbi-1'
}
export default {
  props: {
    message: {
      type: String,
      default: '这是一段提示信息'
    },
    title: {
      type: String,
      default: '提示'
    },
    type: {
      type: String,
      default: ''
    },
    iconClass: [String],
    callback: {
      type: Function,
      default: null
    },
    confirmButtonText: {
      type: String,
      default: '确定'
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visible: false,
      closed: false
    }
  },
  methods: {
    createElement() {
      document.body.appendChild(this.$el)
      this.visible = true
    },
    close(action) {
      if (this.callback) {
        this.callback(action, this)
      }
      this.closed = true
    },
    handleAfterLeave() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
      document.body.style.overflow = ''
    }
  },
  mounted() {
    this.createElement()
  },
  computed: {
    iconName() {
      if (this.iconClass) {
        return this.iconClass
      } else {
        return typeMap[this.type]
      }
    }
  },
  watch: {
    closed(newValue) {
      if (newValue) {
        this.visible = false
      }
    },
    visible(newValue) {
      if (newValue && this.lockScroll) {
        document.body.style.overflow = 'hidden'
      }
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
