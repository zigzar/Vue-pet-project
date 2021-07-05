<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Поиск"
            v-focus
        />
        <div class="app__btns">
            <my-button @click="showDialog" class="btn">
                Создать пост
            </my-button>
            <my-select
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
                :options="sortOptions"
            ></my-select>
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form
            @create="createPost"
            @delete="deletePost"
            />
        </my-dialog>
        <post-list
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
    <div v-else>Идет загрузка...</div>
        <div v-intersection="loadMorePosts" class="observer"></div>
        <!-- <div class="page__wrapper">
            <div 
            v-for="pageNumber in totalPages" 
            :key="pageNumber"
            class="page"
            :class="{
                'current-page': page === pageNumber
            }"
            @click="changePage(pageNumber)"
            >
                {{pageNumber}}
            </div>
        </div> -->
    </div>
</template>

<script>
import PostList from '@/components/PostList';
import PostForm from '@/components/PostForm';
import MyButton from '@/components/UI/MyButton.vue';
import MySelect from '@/components/UI/MySelect.vue';
import MyInput from '@/components/UI/MyInput.vue';
import axios from 'axios';
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
export default {
    components: {
        PostList,
        PostForm,
        MyButton,
    },
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort',
        }),
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts'
        }),
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        deletePost(post) {
            this.posts = this.posts.filter(localPost => localPost.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        ...mapState({
            posts: state => state.post.posts,
		    modificatorValue: state => state.post.modificatorValue,
		    isPostLoading: state => state.post.isPostLoading,
		    selectedSort: state => state.post.selectedSort,
		    searchQuery: state => state.post.searchQuery,
		    page: state => state.post.page,
		    limit: state => state.post.limit,
		    totalPages: state => state.post.totalPages,
		    sortOptions: state => state.post.sortOptions,
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        }),
    },
    watch: {
        // page() {
        //     this.fetchPosts();
        // }
    }
}
</script>

<style>
    h1 {
        margin-bottom: 15px;
    }
    .posts {
        margin-top: 15px;
        transition: .3s;
    }
    .app__btns {
        display: flex;
        justify-content: space-between;
    }
    .page__wrapper {
        display: flex;
        margin-top: 15px;
    }
    .page {
        border: 1px solid black;
        padding: 10px;
        margin-right: 15px;
        user-select: none
    }
    .current-page {
        border: 2px solid darkgreen;
    }
    .observer {
        height: 30px;
        background: green;
    }
</style>