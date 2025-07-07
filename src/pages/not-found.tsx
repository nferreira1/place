import { Main, Section, Title } from "@/components/html";
import { useIntlayer } from "react-intlayer";

export function NotFound() {
	document.title = "Not Found";
	const content = useIntlayer("not-found");

	return (
		<Main>
			<Section>
				<Title text={content.title.value} />
				<span>{content.message.value}</span>
			</Section>
		</Main>
	);
}
