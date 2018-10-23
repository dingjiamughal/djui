/**
 * @file inputBehaviour.js
 * @author djmughal
 * @description mixin input & textarea
 */
import props from './props';

export default {
    name: 'Input',
    model: {
        prop: 'value',
        event: 'input'
    },
    props,
    computed: {
        inputCls() {
            const prefix = 'sv-input';
            return [
                'sv-input',
                {
                    [`${prefix}-error`]: !!this.error,
                    [`${prefix}-disabled`]: !!this.disabled
                }
            ];
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value);
        }
    }
};
