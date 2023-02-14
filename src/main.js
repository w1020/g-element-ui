import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Icon from '@/components/icon'
import Button from '@/components/button'
import Input from '@/components/input'
import InputNumber from '@/components/input-number'
import Radio from '@/components/g-radio/radio'
import RadioGroup from '@/components/g-radio/radio-group'
import RadioButton from '@/components/g-radio/radio-buttom'
import Checkbox from '@/components/g-checkbox/checkbox'
import CheckboxGroup from '@/components/g-checkbox/checkbox-group'
import Message from '@/components/message'
import Messagebox from '@/components/messagebox'
import Carousel from '@/components/g-carousel/carousel'
import CarouselItem from '@/components/g-carousel/carousel-item'
import DemoBlock from '@/components/demo-block'

Vue.config.productionTip = false
Vue.use(Icon)
Vue.use(Button)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Message)
Vue.use(Messagebox)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(DemoBlock)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
