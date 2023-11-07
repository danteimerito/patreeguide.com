<template>
    <button @click="clickButton()" class="btn" :style="{background: color}">{{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String, 
        color: String
    }, 
    methods: {
        clickButton() {
            this.$emit('btn-click')
        }
    }
}
</script>
