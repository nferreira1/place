import { A, Main, Section, SubTitle, Title, UL } from "@/components/html";
import { useIntlayer } from "react-intlayer";

export function Home() {
	const content = useIntlayer("home");

	return (
		<Main>
			<Section>
				<Title text={content.title.value} />

				<UL>
					{content.firstUl.map((item) => (
						<li key={item.text.value}>{item.text.value}</li>
					))}
				</UL>
			</Section>

			<Section>
				<SubTitle text={content.subtitle.value} />

				<UL>
					{content.secondUl.map((item) => (
						<li key={item.text.value}>
							{item.text.value}{" "}
							<A to={item.to.value} target="_blank">
								{item.aText.value}
							</A>
						</li>
					))}
				</UL>
			</Section>
		</Main>
	);
}
