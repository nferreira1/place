import { t, type Dictionary } from "intlayer";

export default {
	key: "work-circulo-militar",
	content: {
		title: t({
			en: "Círculo Militar de São Paulo",
			pt: "Círculo Militar de São Paulo",
		}),
		currentPeriod: t({
			en: "January 2024 - Present",
			pt: "Janeiro 2024 - Presente",
		}),
		currentRole: t({
			en: "Developer",
			pt: "Desenvolvedor",
		}),
		currentDescription: t({
			en: "Worked as a full-stack developer at Círculo Militar de São Paulo, focusing on building internal systems and custom applications using technologies such as Java, JavaScript/TypeScript, Go, Node.js, Bun, React, SolidJS, Electron, and React Native. Responsible for the architecture, development, and maintenance of multiple projects, integrated with AWS, messaging using RabbitMQ, and modern CI/CD practices.",
			pt: "Trabalho como desenvolvedor full-stack no Círculo Militar de São Paulo, focando na construção de sistemas internos e aplicações customizadas usando tecnologias como Java, JavaScript/TypeScript, Go, Node.js, Bun, React, SolidJS, Electron e React Native. Responsável pela arquitetura, desenvolvimento e manutenção de múltiplos projetos, integrados com AWS, mensageria usando RabbitMQ e práticas modernas de CI/CD.",
		}),
		systemsTitle: t({
			en: "Some of the systems I have built and maintain:",
			pt: "Alguns dos sistemas que construí e mantenho:",
		}),
		qrcodeAppTitle: t({
			en: "QRCodeApp",
			pt: "QRCodeApp",
		}),
		qrcodeAppDescription: t({
			en: "Mobile app built with React Native for access control via QR code scanning. Automated member and visitor entry, integrated with internal databases and admin systems.",
			pt: "Aplicativo móvel construído com React Native para controle de acesso via leitura de QR code. Entrada automatizada de membros e visitantes, integrado com bancos de dados internos e sistemas administrativos.",
		}),
		schedulingTitle: t({
			en: "Scheduling System",
			pt: "Sistema de Agendamento",
		}),
		schedulingDescription: t({
			en: "Web platform for booking club spaces and activities, featuring real-time availability, business logic, and notifications.",
			pt: "Plataforma web para reserva de espaços e atividades do clube, com disponibilidade em tempo real, lógica de negócios e notificações.",
		}),
		portalTitle: t({
			en: "Internal Systems Portal",
			pt: "Portal de Sistemas Internos",
		}),
		portalDescription: t({
			en: "Unified portal containing several operational modules:",
			pt: "Portal unificado contendo diversos módulos operacionais:",
		}),
		portalModules: [
			{
				title: t({
					en: "Parcel Management:",
					pt: "Gerenciamento de Encomendas:",
				}),
				description: t({
					en: " Logging, notifying, and releasing member deliveries.",
					pt: " Registro, notificação e liberação de entregas para membros.",
				}),
			},
			{
				title: t({
					en: "Lost and Found:",
					pt: "Achados e Perdidos:",
				}),
				description: t({
					en: " Item registration, tracking, and history.",
					pt: " Registro, rastreamento e histórico de itens.",
				}),
			},
			{
				title: t({
					en: "Playroom:",
					pt: "Brinquedoteca:",
				}),
				description: t({
					en: " Entry/exit tracking, duration, and guardian control.",
					pt: " Controle de entrada/saída, duração e responsáveis.",
				}),
			},
			{
				title: t({
					en: "Nursery:",
					pt: "Berçário:",
				}),
				description: t({
					en: " Attendance and scheduling management.",
					pt: " Gerenciamento de presença e agendamento.",
				}),
			},
		],
		internshipPeriod: t({
			en: "January 2023 - December 2023",
			pt: "Janeiro 2023 - Dezembro 2023",
		}),
		internshipRole: t({
			en: "Software Development Internship",
			pt: "Estágio em Desenvolvimento de Software",
		}),
		internshipDescriptions: [
			t({
				en: "Worked on web application development with a focus on building user interfaces using React.",
				pt: "Trabalhei no desenvolvimento de aplicações web com foco na construção de interfaces de usuário usando React.",
			}),
			t({
				en: "Responsible for implementing reusable components, fixing bugs, performing manual testing, and maintaining legacy systems. Participated in code reviews and integrated frontend features with RESTful APIs.",
				pt: "Responsável por implementar componentes reutilizáveis, corrigir bugs, realizar testes manuais e manter sistemas legados. Participei de revisões de código e integrei funcionalidades frontend com APIs RESTful.",
			}),
			t({
				en: "Supported tasks involving Git version control, issue tracking, and collaborated with the development team in an agile environment.",
				pt: "Apoiei tarefas envolvendo controle de versão Git, rastreamento de issues e colaborei com a equipe de desenvolvimento em um ambiente ágil.",
			}),
		],
	},
} satisfies Dictionary;
