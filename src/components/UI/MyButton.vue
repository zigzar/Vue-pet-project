<template lang="html">
    <button @transitionend.stop>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "my-button"
}
</script>
<style lang="css" scoped>
    button {
        padding: 10px 15px;
        border: 2px solid darkgreen;
        background: none;
        transition: all .3s;
    }
    button:hover {
        background: darkgreen;
        color: white;
    }
</style>