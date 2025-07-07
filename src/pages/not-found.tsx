import { Main, Section, Title } from "@/components/html";

export function NotFound() {
	document.title = "Not Found";

	return (
		<Main>
			<Section>
				<Title text="Page not found" />
				<span>Sorry, we couldn't find the page you're looking for.</span>
			</Section>
		</Main>
	);
}
