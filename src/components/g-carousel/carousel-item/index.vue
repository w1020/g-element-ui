<template>
  <div class="g-carousel__item" :class="[{ 'is-active': active }, isAnimating]" :style="itemStyle"><slot></slot></div>
</template>

<script>
export default {
  name: 'g-carousel-item',
  data() {
    return {
      translate: 0,
      active: false,
      animating: false
    }
  },
  methods: {
    processIndex(index, activeIndex, length) {
      if (activeIndex === 0 && index === length - 1) {
        return -1
      } else if (activeIndex === length - 1 && index === 0) {
        return length
      }
      return index
    },
    calcTranslate(index, activeIndex) {
      return 100 * (index - activeIndex)
    },
    translateItem(index, activeIndex, oldIndex) {
      let length = this.$parent.items.length
      if (oldIndex !== undefined) {
        this.animating = index === activeIndex || index === oldIndex
      }
      if (index !== activeIndex && length > 2) {
        index = this.processIndex(index, activeIndex, length)
      }
      this.active = index === activeIndex
      this.translate = this.calcTranslate(index, activeIndex)
    }
  },
  computed: {
    itemStyle() {
      return `transform: translateX(${this.translate}%);`
    },
    isAnimating() {
      if (this.animating) {
        return `is-animating--${this.$parent.animationDuration}`
      }
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
