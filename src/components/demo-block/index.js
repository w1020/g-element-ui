import DemoBlock from './index.vue'
DemoBlock.install = function (Vue) {
  Vue.component(DemoBlock.name, DemoBlock)
}
export default DemoBlock
