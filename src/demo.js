
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '../examples/app'
import Home from '../examples/index'
import router from '../examples/router'
import loadSprite from '../components/utils/load-spirte'
Vue.use(Home)
loadSprite()

import 'mand-mobile/lib/mand-mobile.css'
import '../src/assets/style.css'


import TgInput from '../components/input/input.vue'
import TgTextarea from '../components/textarea/textarea.vue'
import TgSwitch from '../components/switch/switch.vue'
import TgRadio from '../components/radio/radio.vue'
import TgCell from '../components/cell/cell.vue'
import TgCellGroup from '../components/cell-group/cell-group.vue'
import TgStepper from '../components/stepper/stepper.vue'
import TgSearch from '../components/search/search.vue'
import TgButton from '../components/button/button.vue'
import TgButtonGroup from '../components/button-group/button-group.vue'
import TgProgress from '../components/progress/progress.vue'
import TgCheckbox from '../components/checkbox/checkbox.vue'
import TgCheckGroup from '../components/check-group/check-group.vue'
Vue.component(TgInput.name, TgInput);
Vue.component(TgTextarea.name, TgTextarea);
Vue.component(TgSwitch.name, TgSwitch);
Vue.component(TgRadio.name, TgRadio);
Vue.component(TgCell.name, TgCell);
Vue.component(TgCellGroup.name, TgCellGroup);
Vue.component(TgStepper.name, TgStepper);
Vue.component(TgSearch.name, TgSearch);
Vue.component(TgButton.name, TgButton);
Vue.component(TgButtonGroup.name, TgButtonGroup);
Vue.component(TgProgress.name, TgProgress);
Vue.component(TgCheckbox.name, TgCheckbox);
Vue.component(TgCheckGroup.name, TgCheckGroup);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render (createElement) {
    return createElement(App)
  }
}).$mount('#app')