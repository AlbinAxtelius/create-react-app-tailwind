module.exports = {
	theme: {
		extend: {},
	},
	variants: {
		textColor: ["responsive", "hover", "important"],
	},
	plugins: [require("@tailwindcss/ui"), require("tailwindcss-important")()],
};
