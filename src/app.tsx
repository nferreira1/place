import { Layout } from "@/pages/_layout";
import { NotFound } from "@/pages/not-found";
import { ROUTES } from "@/utils/constants";
import { createElement } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					{ROUTES.map(({ path, element }) => (
						<Route key={path} path={path} element={createElement(element)}></Route>
					))}
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Router>
	);
}
