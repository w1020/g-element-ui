<template>
  <div class="container">
    <demo-block>
      <template slot="source">
        <div class="box1">
          <g-button>默认按钮</g-button>
          <g-button type="primary">主要按钮</g-button>
          <g-button type="success">成功按钮</g-button>
          <g-button type="info">信息按钮</g-button>
          <g-button type="warning">警告按钮</g-button>
          <g-button type="danger">危险按钮</g-button>
        </div>
      </template>
      <template><p>hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello</p></template>
      <template slot="highlight">
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </template>
    </demo-block>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  width: 800px;
  margin: 0 auto;
}
.box1 {
  text-align: center;
}
.box1 > :nth-child(n) {
  margin-right: 10px;
}
</style>
