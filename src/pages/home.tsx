import { A, Main, Section, SubTitle, Title, UL } from "@/components/html";

export function Home() {
	return (
		<Main>
			<Section>
				<Title text="Hi, I'm Nathan Ferreira 👋" />

				<UL>
					<li>Love to build tools.</li>
					<li>Trying, failing, iterating.</li>
				</UL>
			</Section>

			<Section>
				<SubTitle text="You can follow me in other places:" />

				<UL>
					<li>
						What I'm Building:{" "}
						<A to="https://github.com/nferreira1" target="_blank">
							GitHub
						</A>
					</li>

					<li>
						My Company:{" "}
						<A to="https://github.com/n4nlabs" target="_blank">
							GitHub
						</A>
					</li>

					<li>
						Let's Connect:{" "}
						<A to="https://www.linkedin.com/in/nathan-ferreira-97a355231" target="_blank">
							LinkedIn
						</A>
					</li>

					<li>
						My Life in Pics:{" "}
						<A to="https://www.instagram.com/nathan_fefa" target="_blank">
							Instagram
						</A>
					</li>
				</UL>
			</Section>
		</Main>
	);
}
