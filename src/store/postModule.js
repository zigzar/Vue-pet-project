import axios from "axios";

export const postModule = {
	state: () => ({
		posts: [],
		modificatorValue: "",
		isPostLoading: true,
		selectedSort: "",
		searchQuery: "",
		page: 1,
		limit: 10,
		totalPages: 0,
		sortOptions: [
			{ value: "title", name: "По названию" },
			{ value: "body", name: "По описанию" },
		],
	}),
	mutations: {
		setPosts(state, posts) {
			state.posts = posts;
		},
		setModificatorValue(state, modificatorValue) {
			state.modificatorValue = modificatorValue;
		},
		setIsPostLoading(state, isPostLoading) {
			state.isPostLoading = isPostLoading;
		},
		setSelectedSort(state, selectedSort) {
			state.selectedSort = selectedSort;
		},
		setSearchQuery(state, searchQuery) {
			state.searchQuery = searchQuery;
		},
		setPage(state, page) {
			state.page = page;
		},
		setTotalPages(state, totalPages) {
			state.totalPages = totalPages;
		},
	},
	getters: {
		sortedPosts(state) {
			return [...state.posts].sort((post1, post2) =>
				post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
			);
		},
		sortedAndSearchedPosts(state, getters) {
			return getters.sortedPosts.filter((post) =>
				post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
			);
		},
	},
	actions: {
		async fetchPosts({ state, commit }) {
			try {
				commit("setLoading", true);
				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/posts",
					{
						params: {
							_page: state.page,
							_limit: state.limit,
						},
					}
				);
				commit(
					"setTotalPages",
					Math.ceil(response.headers["x-total-count"] / state.limit)
				);
				console.log(response);
				commit("setPosts", response.data);
			} catch (error) {
				alert(`Ошибка: ${error}`);
			} finally {
				commit("setLoading", false);
			}
		},
		async loadMorePosts({ state, commit }) {
			try {
				commit("setPage", ++state.page);
				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/posts",
					{
						params: {
							_page: state.page,
							_limit: state.limit,
						},
					}
				);
				commit(
					"setTotalPages",
					Math.ceil(response.headers["x-total-count"] / state.limit)
				);
				commit("setPosts", [...state.posts, ...response.data]);
			} catch (e) {
				console.log(e);
			}
		},
	},
	namespaced: true,
};
