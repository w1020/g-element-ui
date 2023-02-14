<template>
  <div class="container">
    <g-input placeholder="请输入内容" v-model="msg" :disabled="true" type="textarea"></g-input>
    <h3>{{ msg }}</h3>
    <g-input placeholder="请输入内容" v-model="msg" type="text" size="mini">
      <template slot="prepend">https://</template>
      <template slot="append">.com</template>
    </g-input>
    <br />
    <g-inputNumber v-model.number="count" :max="2" :min="1" :precision="2" :step="0.1"></g-inputNumber>
    <h3>{{ count }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      count: 1
    }
  },
  methods: {
    handleblur() {
      console.log('blur')
    },
    handleChange() {
      console.log('change')
    },
    handleFocus() {
      console.log('focus')
    }
  }
}
</script>

<style scoped>
.container {
  width: 300px;
}
</style>
