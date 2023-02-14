import Vue from 'vue'
import Message from './index.vue'

const FeatureConstructor = Vue.extend(Message)
let instancesLeft = []
let instancesRight = []
let instancesCenter = []
let initVerticalTop = 16
let index = 0

function verticalOffset(instances) {
  return instances.reduce((previousValue, currentValue) => {
    return currentValue.$el.offsetHeight + previousValue + initVerticalTop
  }, initVerticalTop)
}

function updateVertical(instances, id) {
  instances.forEach((item, index) => {
    if (item.id === id) {
      for (let i = instances.length - 1; i > index; i--) {
        instances[i].verticalTop = instances[i - 1].verticalTop
      }
      instances.splice(index, 1)
    }
  })
}

function componentVerticalOffset(instance) {
  if (instance.position === 'left') {
    return verticalOffset(instancesLeft)
  } else if (instance.position === 'right') {
    return verticalOffset(instancesRight)
  } else {
    return verticalOffset(instancesCenter)
  }
}

function updateVerticalTop(id, instance) {
  if (instance.position === 'left') {
    updateVertical(instancesLeft, id)
  } else if (instance.position === 'right') {
    updateVertical(instancesRight, id)
  } else {
    updateVertical(instancesCenter, id)
  }
}

function generateInstance(options) {
  let instance = new FeatureConstructor({
    propsData: options
  }).$mount()
  instance.verticalTop = componentVerticalOffset(instance)
  instance.id = 'message' + index++
  instance.$once('close', function (id) {
    updateVerticalTop(id, instance)
  })
  return instance
}

export default {
  install(Vue) {
    Vue.prototype.$message = function (options) {
      let instance = generateInstance(options)
      if (instance.position === 'left') {
        instancesLeft.push(instance)
      } else if (instance.position === 'center') {
        instancesCenter.push(instance)
      } else {
        instancesRight.push(instance)
      }
    }
  }
}
