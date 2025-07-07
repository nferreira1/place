import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import { intlayerPlugin } from "vite-intlayer";

export default defineConfig({
	plugins: [react(), intlayerPlugin(), tailwindcss()],
	base: "/",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
