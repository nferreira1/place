import { t, type Dictionary } from "intlayer";

export default {
	key: "work",
	content: {
		title: t({
			en: "Work",
			pt: "Trabalho",
		}),
		introduction: t({
			en: "I hold a degree in Systems Analysis and Development and I'm currently pursuing a postgraduate degree in Cloud Computing. I have solid experience in both backend and frontend development, working primarily with Java, JavaScript/TypeScript, and Go.",
			pt: "Possuo graduação em Análise e Desenvolvimento de Sistemas e atualmente estou cursando pós-graduação em Computação em Nuvem. Tenho experiência sólida em desenvolvimento backend e frontend, trabalhando principalmente com Java, JavaScript/TypeScript e Go.",
		}),
		backendText: t({
			en: "On the backend, I use frameworks such as",
			pt: "No backend, utilizo frameworks como",
		}),
		backendFrameworks: t({
			en: ", as well as Elysia with Bun, to build scalable APIs and microservices.",
			pt: ", além do Elysia com Bun, para construir APIs escaláveis e microsserviços.",
		}),
		frontendText: t({
			en: "On the frontend, I work with React (",
			pt: "No frontend, trabalho com React (",
		}),
		frontendFrameworks: t({
			en: " to create modern, performant, and accessible interfaces for web, desktop, and mobile applications.",
			pt: " para criar interfaces modernas, performáticas e acessíveis para aplicações web, desktop e mobile.",
		}),
		experience: t({
			en: "I have developed web, desktop, and mobile applications with a strong focus on clean architecture, scalability, and performance. I'm experienced with asynchronous communication using RabbitMQ and multi-tenant architecture.",
			pt: "Desenvolvi aplicações web, desktop e mobile com foco em arquitetura limpa, escalabilidade e performance. Tenho experiência com comunicação assíncrona usando RabbitMQ e arquitetura multi-tenant.",
		}),
		cloudExperience: t({
			en: "Additionally, I have practical experience with cloud environments, especially",
			pt: "Além disso, tenho experiência prática com ambientes de nuvem, especialmente",
		}),
		awsServices: t({
			en: " services such as EC2, S3, RDS, Lambda, SQS, and CloudWatch, applying them for automation, deployment, scalability, and monitoring.",
			pt: " com serviços como EC2, S3, RDS, Lambda, SQS e CloudWatch, aplicando-os para automação, deploy, escalabilidade e monitoramento.",
		}),
		toolsText: t({
			en: "You can also check out some of the",
			pt: "Você também pode conferir algumas das",
		}),
		toolsLink: t({
			en: "tools I've built",
			pt: "ferramentas que construí",
		}),
		toolsDescription: t({
			en: "— small projects, utilities, and experiments that I use in my workflow.",
			pt: "— pequenos projetos, utilitários e experimentos que uso no meu fluxo de trabalho.",
		}),
		companies: [
			{
				name: "Círculo Militar de São Paulo",
				period: t({
					en: "(2016 - Present)",
					pt: "(2016 - Presente)",
				}),
				link: "/work/circulo-militar",
				isExternal: false,
			},
			{
				name: "N4nLabs",
				period: t({
					en: "(2025 - Present)",
					pt: "(2025 - Presente)",
				}),
				link: "https://github.com/n4nlabs",
				isExternal: true,
			},
		],
	},
} satisfies Dictionary;
