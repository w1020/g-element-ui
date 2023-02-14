<template>
  <div class="container">
    <g-button @click="showMessagebox">showMessagebox</g-button>
    <g-button @click="showMessagebox2">showMessagebox2</g-button>
  </div>
</template>

<script>
export default {
  methods: {
    showMessagebox() {
      this.$confirm({
        message: '此操作将永久删除该文件, 是否继续?',
        type: 'error',
        lockScroll: false
        /*  callback: () => {
          console.log(111)
        } */
      })
    },
    async showMessagebox2() {
      let res = await this.$confirm({
        message: '此操作将永久删除该文件, 是否继续?',
        type: 'error'
      }).catch((err) => err)
      console.log(res)
      /* .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        }) */
    }
  }
}
</script>

<style scoped>
.container {
  height: 5000px;
}
</style>
