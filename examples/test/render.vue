<script>
export default {
    render(createElement) {
        return createElement('div', {
                attrs: {
                    id: 'render'
                }
            },
            [
                createElement('p', {
                    class: {
                        'ppp': true,
                        'asd': false
                    }
                },
                'hahasdfaha')
            ]
        );
    }
};

</script>

