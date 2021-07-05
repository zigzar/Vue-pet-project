<template lang="html">
    <form @submit.prevent>
        <h3>Создание поста</h3>
        <my-input  
            v-model="post.title"
            type="text"
            placeholder="Название"
            v-focus
        />
        <my-input 
            v-model="post.body"
            type="text"
            placeholder="Описание"
        />
        <my-button 
            class="btn"
            @click="createPost"
        >
            тык  
        </my-button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                body: '',
            }
        },
    },
}
</script>
<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }
    h3 {
        margin-bottom: 15px;
    }
    .btn {
        align-self: flex-end;
    }
</style>