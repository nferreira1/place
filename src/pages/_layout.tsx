import { Footer } from "@/components/footer";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Outlet } from "react-router-dom";

export function Layout() {
	return (
		<main className="mx-auto max-w-2xl p-8 md:px-0 md:py-20">
			<LanguageSwitcher />

			<Outlet />
			<Footer />
		</main>
	);
}
