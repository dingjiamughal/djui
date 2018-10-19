import Notification from './Notify';

export default {
    extends: Notification,
    computed: {
        style() {
            return {
                position: 'fixed',
                right: '20px',
                bottom: `${this.verticalOffset}px`
            };
        }
    },
    data() {
        return {
            verticalOffset: 0,
            autoClose: 1000,
            height: 0
            // visible: false
        };
    },
    mounted() {
        this.createTimer();
    },
    methods: {
        createTimer() {
            if (this.autoClose) {
                this.timer = setTimeout(() => {
                    this.visible = false;
                }, this.autoClose);
            }
        },
        clearTimer() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        },
        afterEnter () {
            this.height = this.$el.offsetHeight;
        }
    },
    beforeDestory() {
        this.clearTimer();
    }
};
