import Form from "./Form"
import Errors from "./Errors"

import VuexText from './components/VuexText.vue';
import VuexCheckbox from './components/VuexCheckbox.vue';
import VuexRadio from './components/VuexRadio.vue';
import VuexSelect from './components/VuexSelect.vue';

const VuexForms = {
    install(Vue, options) {
        Vue.component('vuex-text', VuexText)
        Vue.component('vuex-checkbox', VuexCheckbox)
        Vue.component('vuex-radio', VuexRadio)
        Vue.component('vuex-select', VuexSelect)
        Vue.directive('vuex-input', {
            bind: (el, binding, value) => {
                console.log(el)
                console.log(binding)
                console.log(value)
            }
        })
    }
};

export {
    VuexForms,
    Form,
    Errors
}

export default VuexForms;