'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        id: { type: String, default: null },
        name: { type: String, required: true },
        label: { type: String, default: null },
        placeholder: { type: String, default: null },
        required: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        errors: { type: [String, Object, Array], default: null }
    },
    data: function data() {
        return {
            masker: false,
            currentValue: null,
            activeKeyCode: 0,
            localErrors: null
        };
    },
    computed: {
        fieldErrors: function fieldErrors() {
            return this.errors || this.localErrors;
        }
    },
    methods: {
        handleInput: function handleInput(event) {
            return this.inputEvent(this.createEvent(event, 'input'));
        },
        handleBlur: function handleBlur(event) {
            return this.blurEvent(this.createEvent(event, 'blur'));
        },
        handleFocus: function handleFocus(event) {
            return this.focusEvent(this.createEvent(event, 'focus'));
        },
        inputEvent: function inputEvent(event) {
            this.currentValue = event.target.value;
            this.emitEvent('input', event);
        },
        blurEvent: function blurEvent(event) {
            this.emitEvent('blur', event);
        },
        focusEvent: function focusEvent(event) {
            this.emitEvent('focus', event);
        },
        createEvent: function createEvent(event, type) {
            var overrideValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            return {
                type: type,
                target: {
                    id: event.target.id,
                    name: event.target.name,
                    value: overrideValue ? overrideValue : event.target.value
                }
            };
        },
        emitEvent: function emitEvent(type, payload) {
            if (type === 'input') this.$emit('input', payload.target.value);

            this.$emit('event', { type: type, field: this.name, payload: payload });
        }
    }
};