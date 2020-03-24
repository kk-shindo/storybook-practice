<template>
    <button type="button" :class="getClassName"><span class="c-btn01__inner">{{ label }}</span></button>
</template>

<script>
export default {
    name: 'Btn01',
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
            const className = 'c-btn01'
            return this.color ? className + '--' + this.color : className
        }
    }
}
</script>
