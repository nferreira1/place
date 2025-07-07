import { A, Main, P, Section, Title, UL } from "@/components/html";

export function Tools() {
	document.title = "Tools";

	return (
		<Main>
			<Section>
				<Title text="Tools" />
				<P>
					Here are some tools, hopefully others find them useful. They are all in varying states of
					incompleteness.
				</P>
			</Section>

			<Section>
				<UL>
					<li>
						2025 <A to="https://github.com/n4nlabs/hono-kit">Hono Kit</A>
					</li>
					<li>
						2025 <A to="https://github.com/n4nlabs/quarkus-i18n-validation">Quarkus I18n Validation</A>
					</li>
					<li>
						2025 <A to="https://github.com/n4nlabs/quarkus-i18n">Quarkus I18n</A>
					</li>
				</UL>
			</Section>
		</Main>
	);
}
