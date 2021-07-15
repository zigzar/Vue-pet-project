<template lang="html">
        <div 
            class="post"
        >
            <div class="post__content">
                <div><strong>{{post.id}}</strong></div>
                <div><strong>Название:</strong> {{post.title}}</div>
                <div><strong>Описание:</strong> {{post.body}}</div>
            </div>
            <div class="post__btns">
                <my-button class="btn" @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
                <my-button class="btn" @click="$emit('delete', post)">Удалить</my-button>
            </div>
        </div>

</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
}
</script>
<style lang="css" scoped>
    .post {
        padding: 15px;
        border: 2px solid darkgreen;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .post__content {
        padding-right: 15px;
    }
    .post__btns {
        display: flex;
        flex-direction: column;
    }
    .btn {
        margin: .5em;
    }
</style>