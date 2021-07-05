<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Поиск"
            v-focus
        />
        <div class="app__btns">
            <my-button @click="showDialog" class="btn">
                Создать пост
            </my-button>
            <my-select
                v-model="selectedSort"
                :options="sortOptions"
            ></my-select>
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form
            @create="createPost"
            @delete="deletePost"
            />
        </my-dialog>
        <h3 v-if="isPostLoading">Загружаем посты...</h3>
        <post-list 
            :posts="sortedAndSearchedPosts"
            :isLoading="isPostLoading"
            @delete="deletePost"
            class="posts"
        />
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
export default {
    components: {
        PostList,
        PostForm,
        MyButton,
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            modificatorValue: '',
            isPostLoading: true,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'}
            ]
        }
    },
    methods: {
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
        async fetchPosts() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
                console.log(response);
                this.posts = response.data;
            } catch (error) {
                alert(`Ошибка: ${error}`);
            } finally {
                this.isPostLoading = false;
            }
        },
        async loadMorePosts() {
            try {
                this.page++;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
                console.log(response);
                this.posts.push(...response.data);
            } catch (error) {
                alert(`Ошибка: ${error}`);
            }
        }, 
        // changePage(pageNumber) {
        //     this.page = pageNumber;
        // }
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
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