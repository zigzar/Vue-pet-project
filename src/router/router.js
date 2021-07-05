import Main from "@/pages/Main";
import Posts from "@/pages/Posts";
import PostItem from "@/pages/PostItem";
import PostsWithStorage from "@/pages/PostsWithStorage";
import PostsComposition from "@/pages/PostsComposition";
import About from "@/pages/About";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		component: Main,
	},
	{
		path: "/posts",
		component: Posts,
	},
	{
		path: "/about",
		component: About,
	},
	{
		path: "/posts/:id",
		component: PostItem,
	},
	{
		path: "/store",
		component: PostsWithStorage,
	},
	{
		path: "/composition",
		component: PostsComposition,
	},
];

const router = createRouter({
	routes,
	history: createWebHistory(),
});

export default router;
