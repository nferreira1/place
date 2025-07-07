import { Button } from "@/components/html";
import { getLocalizedUrl, Locales } from "intlayer";
import { useLocale } from "react-intlayer";
import { useLocation, useNavigate } from "react-router-dom";

export function LanguageSwitcher() {
	const { locale, setLocale } = useLocale();
	const navigate = useNavigate();
	const location = useLocation();

	const handleLanguageChange = (newLocale: Locales) => {
		setLocale(newLocale);
		const localizedUrl = getLocalizedUrl(location.pathname + location.search, newLocale);

		navigate(localizedUrl);
	};

	return (
		<div className="fixed top-2 right-4">
			<Button
				className="text-base font-semibold"
				onClick={() => handleLanguageChange(locale === "en" ? Locales.PORTUGUESE : Locales.ENGLISH)}
			>
				{locale === "en" ? "PT" : "EN"}
			</Button>
		</div>
	);
}
