import { A, Main, P, Section, Title, UL } from "@/components/html";

export function Work() {
	document.title = "Work";

	return (
		<Main>
			<Section>
				<Title text="Work" />
				<P>
					I hold a degree in Systems Analysis and Development and I’m currently pursuing a postgraduate degree
					in Cloud Computing. I have solid experience in both backend and frontend development, working
					primarily with Java, JavaScript/TypeScript, and Go.
				</P>
				<P>
					On the backend, I use frameworks such as{" "}
					<A to="https://spring.io/projects/spring-boot/">Spring Boot</A>,{" "}
					<A to="https://quarkus.io/">Quarkus</A>, <A to="https://expressjs.com/">Express.js</A>,{" "}
					<A to="https://www.fastify.io/">Fastify</A>, and <A to="https://hono.dev/">Hono</A>, as well as
					Elysia with Bun, to build scalable APIs and microservices.
				</P>
				<P>
					On the frontend, I work with React (<A to="https://nextjs.org/">Next.js</A>,{" "}
					<A to="https://reactrouter.com/">React Router</A>, <A to="https://remix.run/">Remix</A>),{" "}
					<A to="https://solidjs.com/">SolidJS</A>, <A to="https://www.electronjs.org/">Electron</A>, and{" "}
					<A to="https://reactnative.dev/">React Native</A> to create modern, performant, and accessible
					interfaces for web, desktop, and mobile applications.
				</P>
				<P>
					I have developed web, desktop, and mobile applications with a strong focus on clean architecture,
					scalability, and performance. I’m experienced with asynchronous communication using RabbitMQ and
					multi-tenant architecture.
				</P>
				<P>
					Additionally, I have practical experience with cloud environments, especially{" "}
					<A to="https://aws.amazon.com/">AWS</A> services such as EC2, S3, RDS, Lambda, SQS, and CloudWatch,
					applying them for automation, deployment, scalability, and monitoring.
				</P>
				<P>
					You can also check out some of the{" "}
					<A to="/tools" target="_parent">
						tools I've built
					</A>{" "}
					— small projects, utilities, and experiments that I use in my workflow.
				</P>
			</Section>
			<Section>
				<UL>
					<li>
						<A to="/work/circulo-militar" target="_parent">
							Círculo Militar de São Paulo
						</A>
						<span> (2016 - Present)</span>
					</li>
					<li>
						<A to="https://github.com/n4nlabs">N4nLabs</A>
						<span> (2025 - Present)</span>
					</li>
					<li>?</li>
				</UL>
			</Section>
		</Main>
	);
}
