import { HR, UL } from "@/components/html";
import { ROUTES } from "@/utils/constants";
import { Link, useLocation } from "react-router-dom";

export function Footer() {
	const location = useLocation();

	return (
		<footer className="pt-8">
			<HR />

			<section>
				<UL className="grid list-none gap-2 sm:flex!">
					{ROUTES.filter(({ displayFooter }) => !displayFooter).map(({ path, name }) => (
						<li
							key={path}
							data-location={location.pathname === path}
							className="no-before data-[location=true]:underline"
						>
							<Link to={path}>{name}</Link>
						</li>
					))}
				</UL>
			</section>
		</footer>
	);
}
