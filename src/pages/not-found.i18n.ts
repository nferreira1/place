import { t, type Dictionary } from "intlayer";

export default {
	key: "not-found",
	content: {
		title: t({
			en: "Page not found",
			pt: "Página não encontrada",
		}),
		message: t({
			en: "Sorry, we couldn't find the page you're looking for.",
			pt: "Desculpe, não conseguimos encontrar a página que você está procurando.",
		}),
	},
} satisfies Dictionary;
