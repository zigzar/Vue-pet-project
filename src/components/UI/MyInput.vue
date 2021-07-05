<template lang="html">
    <input  
        class="input"
        type="text" 
        :value="modelValue"
        @input="updateInput"
    >
</template>
<script>
export default {
    name: "my-input",
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        },
    }
}
</script>
<style lang="css">
    .input {
        margin-bottom: 15px;
        padding: 10px;
        border: 2px solid darkgreen;
        width: 100%;
    }
</style>