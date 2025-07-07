import { A, Main, P, Section, Title, UL } from "@/components/html";
import { useIntlayer } from "react-intlayer";

export function Work() {
	const content = useIntlayer("work");

	document.title = content.title.value;

	return (
		<Main>
			<Section>
				<Title text={content.title.value} />
				<P>{content.introduction.value}</P>
				<P>
					{content.backendText.value} <A to="https://spring.io/projects/spring-boot/">Spring Boot</A>,{" "}
					<A to="https://quarkus.io/">Quarkus</A>, <A to="https://expressjs.com/">Express.js</A>,{" "}
					<A to="https://www.fastify.io/">Fastify</A>, and <A to="https://hono.dev/">Hono</A>
					{content.backendFrameworks.value}
				</P>
				<P>
					{content.frontendText.value}
					<A to="https://nextjs.org/">Next.js</A>, <A to="https://reactrouter.com/">React Router</A>,{" "}
					<A to="https://remix.run/">Remix</A>), <A to="https://solidjs.com/">SolidJS</A>,{" "}
					<A to="https://www.electronjs.org/">Electron</A>, and{" "}
					<A to="https://reactnative.dev/">React Native</A>
					{content.frontendFrameworks.value}
				</P>
				<P>{content.experience.value}</P>
				<P>
					{content.cloudExperience.value} <A to="https://aws.amazon.com/">AWS</A>
					{content.awsServices.value}
				</P>
				<P>
					{content.toolsText.value}{" "}
					<A to="/tools" target="_parent">
						{content.toolsLink.value}
					</A>{" "}
					{content.toolsDescription.value}
				</P>
			</Section>
			<Section>
				<UL>
					{content.companies.map((company, index) => (
						<li key={index}>
							{company.isExternal ? (
								<A to={company.link.value} target="_parent">
									{company.name}
								</A>
							) : (
								<A to={company.link.value} target="_parent">
									{company.name}
								</A>
							)}
							<span> {company.period.value}</span>
						</li>
					))}
					<li>?</li>
				</UL>
			</Section>
		</Main>
	);
}
