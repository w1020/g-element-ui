<template>
  <div class="demo-block" @mouseenter.stop="handleMouseenter" @mouseleave="handleMouseleave">
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="meta" style="height: 500px">
      <div class="description"><slot></slot></div>
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <div class="demo-block-control">
      <g-icon name="Chevron-down" :iconClass="{ hovering: hovering }"></g-icon>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-block',
  data() {
    return {
      isExpanded: false,
      hovering: false
    }
  },
  computed: {
    controlText() {
      if (this.isExpanded) {
        return '隐藏代码'
      } else {
        return '显示代码'
      }
    }
  },
  methods: {
    handleMouseenter() {
      this.hovering = true
    },
    handleMouseleave() {
      this.hovering = false
    }
  }
}
</script>

<style scoped>
@import url('./style.css');
</style>
