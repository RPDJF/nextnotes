import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				sizeup: "sizeup 0.2s linear forwards",
			},
			keyframes: {
				sizeup: {
					"0%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.08)" },
					"100%": { transform: "scale(1.06)" },
				},
			}
		},
	},
	plugins: [
		require("tailwindcss-animated"),
	],
};
export default config;
