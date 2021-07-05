<template lang="html">
    <div v-if="posts.length > 0">
        <h3>Список постов</h3>
        <transition-group name="post-list">
        <post-item 
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @delete="$emit('delete', post)"
        />
        </transition-group>
    </div>
    <h3 :isLoading="isLoading" v-else-if="!isLoading">Список пуст</h3>
</template>
<script>
import PostItem from '@/components/PostItem';
export default {
    components: {
        PostItem,
    },
    props: {
        posts: {
            type: Array,
            required: true,
        },
        isLoading: {
            type: Boolean,
            default: true,
            required: true
        }
    },
}
</script>
<style lang="css" scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all .3s ease-in-out;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.post-list-move {
    transition: all .3s ease;
}
</style>