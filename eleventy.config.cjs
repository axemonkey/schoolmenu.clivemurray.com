module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('schoolmenu.clivemurray.com/public');
	eleventyConfig.addPassthroughCopy({ 'schoolmenu.clivemurray.com/robots.txt': '/robots.txt' });
	eleventyConfig.setUseGitIgnore(false);
	eleventyConfig.setServerOptions({
		// liveReload: false,
		watch: [
			'schoolmenu.clivemurray.com/public/**/*',
		],
		showVersion: true,
	});

	return {
		dir: {
			includes: "_includes",
			layouts: "_layouts",
		}
	}
};
