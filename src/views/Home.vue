<template>
  <div class="box">
    <div>
      <g-button>默认按钮</g-button>
      <g-button type="primary">主要按钮<g-icon name="xiazai"></g-icon></g-button>
      <g-button type="success">成功按钮</g-button>
      <g-button type="info">信息按钮</g-button>
      <g-button type="warning">警告按钮</g-button>
      <g-button type="danger">危险按钮</g-button>
    </div>
    <div>
      <g-button plain>朴素按钮</g-button>
      <g-button plain type="primary">主要按钮</g-button>
      <g-button plain type="success">成功按钮</g-button>
      <g-button plain type="info">信息按钮</g-button>
      <g-button plain type="warning">警告按钮</g-button>
      <g-button plain type="danger">危险按钮</g-button>
    </div>
    <div>
      <g-button round>圆角按钮</g-button>
      <g-button type="primary" round>主要按钮</g-button>
      <g-button type="success" round>成功按钮</g-button>
      <g-button type="info" round>信息按钮</g-button>
      <g-button type="warning" round>警告按钮</g-button>
      <g-button type="danger" round>危险按钮</g-button>
    </div>
    <div>
      <g-button type="primary" icon="Download">按钮</g-button>
      <g-button type="primary" icon="Eye"></g-button>
      <g-button type="primary" icon="Search-20"></g-button>
    </div>
    <div>
      <g-button>朴素按钮</g-button>
      <g-button plain disabled type="primary">主要按钮</g-button>
      <g-button plain disabled type="success">成功按钮</g-button>
      <g-button plain disabled type="info">信息按钮</g-button>
      <g-button plain disabled type="warning">警告按钮</g-button>
      <g-button plain disabled type="danger">危险按钮</g-button>
    </div>
    <div>
      <g-button>默认按钮</g-button>
      <g-button size="medium">默认按钮</g-button>
      <g-button size="small">默认按钮</g-button>
      <g-button size="mini">默认按钮</g-button>
    </div>
    <div>
      <g-button round>圆角按钮</g-button>
      <g-button round size="medium">圆角按钮</g-button>
      <g-button round size="small">圆角按钮</g-button>
      <g-button round size="mini">圆角按钮</g-button>
    </div>
    <g-button @click="goToInput">gotoInput</g-button>
    <g-button @click="gotoRadio">gotoRadio</g-button>
    <g-button @click="gotoMessage">gotoMessage</g-button>
    <g-button @click="gotoMessagebox">gotoMessagebox</g-button>
    <g-button @click="gotocarousel">gotocarousel</g-button>
    <g-button @click="gotoDemo">gotoDemo</g-button>
  </div>
</template>

<script>
export default {
  methods: {
    goToInput() {
      this.$router.push('/input')
    },
    gotoRadio() {
      this.$router.push('/radio')
    },
    gotoMessage() {
      this.$router.push('/message')
    },
    gotoMessagebox() {
      this.$router.push('/messagebox')
    },
    gotocarousel() {
      this.$router.push('/carousel')
    },
    gotoDemo() {
      this.$router.push('/demo')
    }
  }
}
</script>

<style lang="less" scoped>
.g-button {
  margin-left: 10px;
}
.box > div {
  margin-bottom: 10px;
}
</style>
