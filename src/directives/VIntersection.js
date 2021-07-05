export default {
	name: "intersection",
	mounted(element, binding) {
		const options = {
			rootMargin: "0px",
			threshold: 0.1,
		};
		const callback = (entries, observer) => {
			if (entries[0].isIntersecting) {
				binding.value();
			}
		};
		const observer = new IntersectionObserver(callback, options);
		observer.observe(element);
	},
};
