<template>
  <div class="g-carousel" @mouseenter.stop="handleMouseEnter" @mouseleave.stop="handleMouseLeave">
    <div class="g-carousel-container" :style="containerStyle">
      <transition name="carousel-arrow-left" v-if="arrowDisplay">
        <button class="g-carousel__arrow g-carousel__arrow--left" v-show="hover || arrow === 'always'" @click.stop="leftArrowClick">
          <g-icon name="jiantou-zuo"></g-icon>
        </button>
      </transition>
      <transition name="carousel-arrow-right" v-if="arrowDisplay">
        <button class="g-carousel__arrow g-carousel__arrow--right" v-show="hover || arrow === 'always'" @click.stop="rightArrowClick">
          <g-icon name="jiantou-you"></g-icon>
        </button>
      </transition>
      <slot></slot>
    </div>
    <ul :class="['g-carousel__indicators', 'g-carousel__indicators--horizontal', indicatorPosition ? 'g-carousel__indicators--outside' : '']">
      <li
        class="g-carousel__indicator g-carousel__indicator--horizontal"
        v-for="(item, i) in items"
        :key="i"
        :class="{ 'is-active': i === activeIndex }"
        @mouseenter.stop="indicatorMouseenter(i)"
        @click.stop="indicatorClick(i)"
      >
        <button class="g-carousel__button"></button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'g-carousel',
  props: {
    animationDuration: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['default', 'faster', 'slower'].includes(value)
      }
    },
    interval: {
      type: Number,
      default: 3000
    },
    height: [String],
    autoplay: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: String,
      default: 'hover',
      validator: (value) => {
        return ['always', 'hover', 'never'].includes(value)
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator: (value) => {
        return ['click', 'hover'].includes(value)
      }
    },
    indicatorPosition: [String]
  },
  data() {
    return {
      items: [],
      activeIndex: 0,
      timer: null,
      hover: false,
      flag: true
    }
  },
  mounted() {
    this.getItems()
    this.$nextTick(() => {
      this.resetItemPorsition()
      if (this.autoplay) {
        this.startTimer()
      }
    })
  },
  methods: {
    throttle() {
      setTimeout(() => {
        this.flag = true
      }, this.throttleTime)
    },
    indicatorClick(i) {
      if (this.flag && this.trigger === 'click') {
        this.flag = false
        this.activeIndex = i
        this.throttle()
      }
    },
    indicatorMouseenter(i) {
      if (this.flag && this.trigger === 'hover') {
        console.log(1)
        this.flag = false
        this.activeIndex = i
        this.throttle()
      }
    },
    leftArrowClick() {
      if (this.flag) {
        this.flag = false
        this.retrogradeSlides()
        this.throttle()
      }
    },
    rightArrowClick() {
      if (this.flag) {
        this.flag = false
        this.playSlides()
        this.throttle()
      }
    },
    handleMouseEnter() {
      this.hover = true
      if (this.autoplay) {
        this.clearTimer()
      }
    },
    handleMouseLeave() {
      this.hover = false
      if (this.autoplay) {
        this.startTimer()
      }
    },
    getItems() {
      this.items = this.$children.filter((item) => item.$options.name === 'g-carousel-item')
    },
    resetItemPorsition(oldValue) {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex, oldValue)
      })
    },
    retrogradeSlides() {
      if (this.activeIndex > 0) {
        this.activeIndex--
      } else {
        this.activeIndex = this.items.length - 1
      }
    },
    playSlides() {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++
      } else {
        this.activeIndex = 0
      }
    },
    startTimer() {
      this.timer = setInterval(this.playSlides, this.interval)
    },
    clearTimer() {
      clearInterval(this.timer)
    }
  },
  watch: {
    activeIndex(newValue, oldValue) {
      this.resetItemPorsition(oldValue)
      if (oldValue > -1) {
        this.$emit('change', newValue, oldValue)
      }
    }
  },
  computed: {
    containerStyle() {
      return `height: ${this.height};`
    },
    arrowDisplay() {
      return this.arrow !== 'never'
    },
    throttleTime() {
      if (this.animationDuration === 'default') return 600
      if (this.animationDuration === 'faster') return 400
      if (this.animationDuration === 'slower') return 800
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
