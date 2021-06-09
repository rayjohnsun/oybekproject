import Vue from 'vue'

Vue.directive('color', {
  // Когда привязанный элемент вставлен в DOM...
  bind: function (el, binding) {
  	el.style.color = binding.value
  	if (binding.modifiers) {
  		if (binding.modifiers.font80) {
		  	el.style.fontSize = '80px'
  		}
  		if (binding.modifiers.bold) {
		  	el.style.fontWeight = 'bold'
  		}
  		if (binding.modifiers.normal) {
		  	el.style.fontWeight = 'normal'
  		}
  		if (binding.modifiers.italic) {
		  	el.style.fontStyle = 'italic'
  		}
  	}
  },
  inserted: function () {
    console.log('inserted')
  },
  update: function (el, binding) {
  	el.style.color = binding.value
  },
  componentUpdated: function () {
    console.log('componentUpdated')
  },
  unbind: function () {
    console.log('unbinded')
  },
})
