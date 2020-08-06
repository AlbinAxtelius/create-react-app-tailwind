module.exports = {
	purge: {
		enabled: false, //! Set to true when building for deployment
		content: ["./src/**/*.tsx", "./src/**/*ts"],
		options: {
			whitelist: [],
		},
	},
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [require("@tailwindcss/ui"), require("tailwindcss-important")()],
};
