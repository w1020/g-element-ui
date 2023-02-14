import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import input from '@/views/Input.vue'
import Radio from '@/views/Radio.vue'
import Message from '@/views/Message.vue'
import Messagebox from '@/views/Messagebox.vue'
import Carousel from '@/views/carousel.vue'
import Demo from '@/views/demo.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/input', component: input },
  { path: '/radio', component: Radio },
  { path: '/message', component: Message },
  { path: '/messagebox', component: Messagebox },
  { path: '/carousel', component: Carousel },
  { path: '/demo', component: Demo }
]

const router = new VueRouter({
  routes
})

export default router
