import Vue from 'vue'
import Messagebox from './index.vue'
const FeatureConstructor = Vue.extend(Messagebox)

let currentMsg = {}

const defaultCallback = (action) => {
  if (Object.keys(currentMsg).length !== 0) {
    if (action === 'confirm') {
      currentMsg.resolve(action)
    } else if (action === 'cancel') {
      currentMsg.reject(action)
    }
  }
}

function generateInstance(options) {
  let instance = new FeatureConstructor({
    propsData: options
  }).$mount()
  if (!options.callback) {
    instance.callback = defaultCallback
    return new Promise((resolve, reject) => {
      currentMsg.instance = instance
      currentMsg.resolve = resolve
      currentMsg.reject = reject
    })
  } else {
    return instance
  }
}

export default {
  install(Vue) {
    Vue.prototype.$confirm = function (options) {
      return generateInstance(options)
    }
  }
}
