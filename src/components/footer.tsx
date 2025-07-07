import { HR, Link, UL } from "@/components/html";
import { ROUTES } from "@/utils/constants";
import { getLocalizedUrl } from "intlayer";
import { useIntlayer, useLocale } from "react-intlayer";
import { useLocation } from "react-router-dom";

export function Footer() {
	const location = useLocation();
	const content = useIntlayer("routes");
	const { locale } = useLocale();

	return (
		<footer className="pt-8">
			<HR />

			<section>
				<UL className="grid list-none gap-2 sm:flex!">
					{ROUTES.filter(({ i18n }) => i18n).map(({ path, i18n }) => {
						const localizedPath = getLocalizedUrl(path, locale);
						const isActive = location.pathname === localizedPath;

						return (
							<li
								key={path}
								data-location={isActive}
								className="no-before data-[location=true]:underline"
							>
								<Link to={path}>{i18n && content.routes[i18n as keyof typeof content.routes]}</Link>
							</li>
						);
					})}
				</UL>
			</section>
		</footer>
	);
}
