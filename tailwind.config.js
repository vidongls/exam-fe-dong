/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#362C27",
				},
				secondary: {
					DEFAULT: "#FAF9F8",
					50: "#B4B3B2",
				},
				tertiary: {
					DEFAULT: "#C2996F",
					_3333: "#3333",
				},
			},
			fontFamily: {
				sans: ['"Open Sans"'],
			},
		},
	},
	plugins: [],
};

