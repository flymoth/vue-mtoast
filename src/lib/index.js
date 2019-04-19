import ToastComponent from "./toast.vue"
let Toast = {}
Toast.install = function(Vue, options) {
	var opt = {
		duration: 3000
	}
	for (var key in options) {
		opt[key] = options[key]
	}
	Vue.prototype.$toast = function(msg, option) {
		if (typeof option == "object") {
			for (var key in option) {
				opt[key] = option[key]
			}
		}
		const ToastController = Vue.extend(ToastComponent)
		var instance = new ToastController().$mount(document.createElement("div"))
		instance.msg = msg
		document.body.appendChild(instance.$el)
		setTimeout(() => {
			document.body.removeChild(instance.$el)
		}, opt.duration)
	}
}
if (window.Vue) {
	Vue.use(Toast)
}
export default Toast
