
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from '../examples/app'
// import Home from '../examples/index'
// import router from '../examples/router'
// Vue.use(Home)

// import { Input } from 'cube-ui'
// Vue.use(Input)
// import 'mand-mobile/lib/mand-mobile.css'


// import TgInput from '../components/input/input.vue'
// import TgTextarea from '../components/textarea/textarea.vue'
// import TgSwitch from '../components/switch/switch.vue'
// import TgRadio from '../components/radio/radio.vue'
// import TgCell from '../components/cell/cell.vue'
// import TgCellGroup from '../components/cell-group/cell-group.vue'
// import TgStepper from '../components/stepper/stepper.vue'
// import TgSearch from '../components/search/search.vue'
// Vue.component(TgInput.name, TgInput);
// Vue.component(TgTextarea.name, TgTextarea);
// Vue.component(TgSwitch.name, TgSwitch);
// Vue.component(TgRadio.name, TgRadio);
// Vue.component(TgCell.name, TgCell);
// Vue.component(TgCellGroup.name, TgCellGroup);
// Vue.component(TgStepper.name, TgStepper);
// Vue.component(TgSearch.name, TgSearch);

// import '../static/css/style.css'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   router,
//   render (createElement) {
//     return createElement(App)
//   }
// }).$mount('#app')


import { Input } from 'cube-ui'
import 'mand-mobile/lib/mand-mobile.css'
import './assets/style.css'

import TgInput from '../components/input/input.vue'
import TgTextarea from '../components/textarea/textarea.vue'
import TgSwitch from '../components/switch/switch.vue'
import TgRadio from '../components/radio/radio.vue'
import TgCell from '../components/cell/cell.vue'
import TgCellGroup from '../components/cell-group/cell-group.vue'
import TgStepper from '../components/stepper/stepper.vue'
import TgSearch from '../components/search/search.vue'

const components = [
	TgInput,
	TgTextarea,
	TgSwitch,
	TgRadio,
	TgCell,
	TgCellGroup,
	TgStepper,
	TgSearch
]

const install = function(Vue, config = {}) {
	if (install.installed) return;
	install.installed = true
	Vue.component(Input.name, Input);
	Vue.component(TgInput.name, TgInput);
	Vue.component(TgTextarea.name, TgTextarea);
	Vue.component(TgSwitch.name, TgSwitch);
	Vue.component(TgRadio.name, TgRadio);
	Vue.component(TgCell.name, TgCell);
	Vue.component(TgCellGroup.name, TgCellGroup);
	Vue.component(TgStepper.name, TgStepper);
	Vue.component(TgSearch.name, TgSearch);	
};

// const Tg = {
// 	 eslint-disable no-undef 
// 	version: '0.0.0',
// 	install
// }

// components.forEach((Component) => {
// 	var name = Component.name.replace(/^Tg-/i, '');
// 	name = name.charAt(0).toUpperCase() + name.slice(1)
// 	Tg[name] = Component;
// })

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
};
export {
	Input,
	Textarea,
	Switch,
	Radio,
	Cell,
	CellGroup,
	Stepper,
	Search
}

export default {
	version: '0.0.0',
	install
}
