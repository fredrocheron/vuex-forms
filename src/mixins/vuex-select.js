import merge from "merge"
import VuexField from "./vuex-field"

export default () => merge.recursive(true, VuexField, {
    props: {
        options: {type: [String, Object, Array], default: () => []},
        option_name: {type: String, default: 'name'},
        option_value: {type: String, default: 'value'},
        multiple: {type: Boolean, default: false},
    },
    methods: {
        checkSelected(value) {
            if (!this.multiple && this.currentValue === value) return true
            if (this.multiple && this.currentValue !== null && value.length) return this.currentValue.indexOf(value) !== -1
        },

        handleInput(event) {
            let values = null;
            if (this.multiple && event.target.selectedOptions) {
                values = [];
                for (let x = 0; x < event.target.selectedOptions.length; x++) {
                    values.push(event.target.selectedOptions[x].value)
                }
            }
            return this.inputEvent(this.createEvent(event, 'input', values));
        },

        inputEvent(event) {
            this.value = event.target.value
            this.emitEvent('input', event)
        },
    }
})
