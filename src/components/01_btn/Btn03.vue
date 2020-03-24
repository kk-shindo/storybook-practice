<template>
    <button type="button" :class="getClassName"><span class="c-btn03__inner">{{ label }}</span></button>
</template>

<script>
export default {
    name: 'Btn03',
    props: {
        label: {
            type: String,
            default: 'BUTTON'
        },
        color: {
            type: String,
            default: ''
        },
    },
    computed: {
        getClassName() {
            if(this.color) {
                return 'c-btn03--' + this.color
            } else {
                return 'c-btn03'
            }
        }
    }
}
</script>
