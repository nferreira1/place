// import { A } from "@/components/html";
import { t, type Dictionary } from "intlayer";

export default {
	key: "home",
	content: {
		title: t({
			en: "Hi, I'm Nathan Ferreira 👋",
			pt: "Oi, eu sou o Nathan Ferreira 👋",
		}),
		firstUl: [
			{
				text: t({
					en: "Love to build tools.",
					pt: "Adoro construir ferramentas.",
				}),
			},
			{
				text: t({
					en: "Trying, failing, iterating.",
					pt: "Tentando, falhando, iterando.",
				}),
			},
		],
		subtitle: t({
			en: "You can follow me in other places:",
			pt: "Você pode me seguir em outros lugares:",
		}),
		secondUl: [
			{
				text: t({
					en: "What I'm building:",
					pt: "O que estou construindo:",
				}),
				to: "https://github.com/nferreira1",
				aText: "GitHub",
			},
			{
				text: t({
					en: "My company:",
					pt: "Minha empresa:",
				}),
				to: "https://github.com/n4nlabs",
				aText: "GitHub",
			},
			{
				text: t({
					en: "Let's connect:",
					pt: "Vamos nos conectar:",
				}),
				to: "https://www.linkedin.com/in/nathan-ferreira-97a355231",
				aText: "LinkedIn",
			},
			{
				text: t({
					en: "My life in pics:",
					pt: "Minha vida em fotos:",
				}),
				to: "https://www.instagram.com/nathan_fefa",
				aText: "Instagram",
			},
		],
	},
} satisfies Dictionary;
