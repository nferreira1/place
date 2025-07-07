import { t, type Dictionary } from "intlayer";

export default {
	key: "routes",
	content: {
		routes: t({
			en: {
				home: "Home",
				work: "Work",
				tools: "Tools",
			},
			pt: {
				home: "Início",
				work: "Trabalho",
				tools: "Ferramentas",
			},
		}),
	},
} satisfies Dictionary;
