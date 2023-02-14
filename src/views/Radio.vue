<template>
  <div>
    <g-radio-group v-model="radio" size="small ">
      <g-radio label="1">男</g-radio>
      <g-radio label="2" border>女</g-radio>
      <g-radio label="3" border size="mini">人妖</g-radio>
    </g-radio-group>
    <div class="container">
      <g-radio-group v-model="radio2" size="mini">
        <g-radio-button label="1" :name="'男'">男</g-radio-button>
        <g-radio-button label="2">女</g-radio-button>
        <g-radio-button label="3" disabled>人妖</g-radio-button>
      </g-radio-group>
    </div>
    <div class="container">
      <g-checkbox-group v-model="checked" size="mini">
        <g-checkbox label="唱" border>唱</g-checkbox>
        <g-checkbox label="跳">跳</g-checkbox>
        <g-checkbox label="rap">rap</g-checkbox>
        <g-checkbox label="篮球" disabled>篮球</g-checkbox>
      </g-checkbox-group>
    </div>
    <g-checkbox v-model="checked2" label="music" true-label="1" false-label="0" border size="mini"> music </g-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      radio2: '3',
      checked: ['唱'],
      checked2: true
    }
  },
  methods: {
    handleChange() {
      console.log('a')
    }
  }
}
</script>

<style scoped>
.container {
  margin: 20px 10px;
}
</style>
