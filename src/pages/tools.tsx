import { A, Main, P, Section, Title, UL } from "@/components/html";
import { useIntlayer } from "react-intlayer";

export function Tools() {
	document.title = "Tools";
	const content = useIntlayer("tools");

	return (
		<Main>
			<Section>
				<Title text={content.title.value} />
				<P>{content.description.value}</P>
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
