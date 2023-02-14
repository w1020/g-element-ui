<template>
  <div class="container">
    <g-button @click="showMessage">打开message</g-button>
    <g-button @click="showMessage2">打开message</g-button>
  </div>
</template>

<script>
export default {
  methods: {
    showMessage() {
      this.$message({
        message: 'hello',
        type: 'info',
        showClose: true,
        duration: 2000,
        iconClass: 'gerenzhongxin',
        position: 'right',
        center: true
      })
    },
    showMessage2() {
      this.$message({
        message: 'hello',
        type: 'success',
        showClose: true,
        duration: 2000,
        position: 'center',
        center: true
      })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 20px;
}
</style>
