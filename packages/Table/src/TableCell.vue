<script>
/**
 * @file TableCell
 * @author djmughal
 * @description td render
 */

import {isObject, isVNode, isRenderAble} from 'util/decorate';
export default {
    props: {
        render: [Object, Function],
        value: {
            type: String,
            default: ''
        }
    },
    render(h) {
        const node = this.render;
        const prefix = 'sv-table-cell';
        if (isObject(node)) { // constructor.name === 'object'
            return h(
                'span', {
                    class: [
                        `${prefix}`,
                        {
                            [`${prefix}-${this.status}`]: !!this.status
                        }
                    ]
                }, this.$slot.default
            );
        }

        else if (isVNode(node)) { // constructor.super === vue
            return this.render;
        }

        return h('span', {
            props: {
                value: this.value,
                className: this.calssName
            }
        });
    }
};

</script>
