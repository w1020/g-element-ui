<template>
  <transition name="message-fade" @after-leave="handleAfterLeave">
    <div
      class="g-message"
      :class="[`g-message--${type}`, center ? `g-message--center` : '', `g-position--${position}`]"
      v-show="visible"
      :style="messageStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <g-icon :name="iconName"></g-icon>
      <p class="g-message_content">{{ message }}</p>
      <span class="close-btn" @click="closeMessage" v-if="showClose">
        <g-icon name="guanbi"></g-icon>
      </span>
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
      default: '这是一条消息提示'
    },
    type: {
      type: String,
      default: 'info'
    },
    duration: {
      type: Number,
      default: 3000
    },
    center: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    },
    iconClass: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'center'
    }
  },
  data() {
    return {
      id: '',
      visible: false,
      verticalTop: 0,
      timer: null
    }
  },
  methods: {
    createElement() {
      this.visible = true
      document.body.appendChild(this.$el)
    },
    closeMessage() {
      this.visible = false
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.duration)
      }
    },
    clearTimer() {
      clearTimeout(this.timer)
    },
    handleAfterLeave() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  mounted() {
    this.createElement()
    this.startTimer()
  },
  computed: {
    messageStyle() {
      return {
        top: this.verticalTop + 'px'
      }
    },
    iconName() {
      if (this.iconClass) {
        return this.iconClass
      } else {
        return typeMap[this.type]
      }
    }
  },
  watch: {
    visible(newValue) {
      if (!newValue) {
        this.clearTimer()
        this.$emit('close', this.id)
      }
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
