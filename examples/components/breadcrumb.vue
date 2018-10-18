<template lang="pug">
    sv-breadcrumb(@goto='go', :items="items")
        span asdf
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Dashboard',
                    disabled: false
                },
                {
                    text: 'Link 1',
                    disabled: false
                },
                {
                    text: 'Link 2',
                    disabled: true
                }
            ]
        };
    },
    methods: {
        go(item) {
            console.log(item.text);
        }
    }
};

</script>
