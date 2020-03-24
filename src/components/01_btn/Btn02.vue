<template>
    <button type="button" :class="getClassName"><span class="c-btn02__inner">{{ label }}</span></button>
</template>

<script>
export default {
    name: 'Btn02',
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
                return 'c-btn02--' + this.color
            } else {
                return 'c-btn02'
            }
        }
    }
}
</script>
