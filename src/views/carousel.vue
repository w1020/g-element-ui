<template>
  <div class="container">
    <g-carousel animationDuration="slower" :interval="4000" trigger="click" indicator-position="outside">
      <g-carousel-item>
        <div class="box1">1</div>
      </g-carousel-item>
      <g-carousel-item>
        <div class="box2">2</div>
      </g-carousel-item>
      <g-carousel-item>
        <div class="box3">3</div>
      </g-carousel-item>
      <g-carousel-item>
        <div class="box4">4</div>
      </g-carousel-item>
      <g-carousel-item>
        <div class="box5">5</div>
      </g-carousel-item>
      <!-- <g-carousel-item>
        <div class="box6">6</div>
      </g-carousel-item> -->
    </g-carousel>
  </div>
</template>

<script>
export default {
  methods: {}
}
</script>

<style scoped>
.container {
  width: 500px;
  margin: 20px auto;
}
div[class^='box'] {
  height: 100%;
  text-align: center;
}
.box1 {
  background-color: red;
}
.box2 {
  background-color: pink;
}
.box3 {
  background-color: green;
}
.box4 {
  background-color: aqua;
}
.box5 {
  background-color: antiquewhite;
}
.box6 {
  background-color: gold;
}
</style>
