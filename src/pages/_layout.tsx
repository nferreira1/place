import { Footer } from "@/components/footer";
import { Outlet } from "react-router-dom";

export function Layout() {
	return (
		<main className="mx-auto max-w-2xl p-8 md:px-0 md:py-20">
			<Outlet />
			<Footer />
		</main>
	);
}
