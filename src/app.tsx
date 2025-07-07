import { Layout } from "@/pages/_layout";
import { NotFound } from "@/pages/not-found";
import { ROUTES } from "@/utils/constants";
import { configuration, getPathWithoutLocale, type Locales } from "intlayer";
import { createElement, type FC, type PropsWithChildren } from "react";
import { IntlayerProvider } from "react-intlayer";
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";

const { internationalization, middleware } = configuration;
const { locales, defaultLocale } = internationalization;

const AppLocalized: FC<PropsWithChildren<{ locale: Locales }>> = ({ children, locale }) => {
	const { pathname, search } = useLocation();
	const currentLocale = locale ?? defaultLocale;
	const pathWithoutLocale = getPathWithoutLocale(pathname);

	if (middleware.prefixDefault) {
		if (!locale || !locales.includes(locale)) {
			return <Navigate to={`/${defaultLocale}/${pathWithoutLocale}${search}`} replace />;
		}

		return <IntlayerProvider locale={currentLocale}>{children}</IntlayerProvider>;
	} else {
		if (
			currentLocale.toString() !== defaultLocale.toString() &&
			!locales.filter((locale) => locale.toString() !== defaultLocale.toString()).includes(currentLocale)
		) {
			return <Navigate to={`${pathWithoutLocale}${search}`} replace />;
		}

		return <IntlayerProvider locale={currentLocale}>{children}</IntlayerProvider>;
	}
};

export function App() {
	return (
		<Router>
			<Routes>
				{locales
					.filter((locale) => locale !== defaultLocale)
					.map((locale) => (
						<Route
							path={`/${locale}/*`}
							key={locale}
							element={
								<AppLocalized locale={locale}>
									<Routes>
										<Route element={<Layout />}>
											{ROUTES.map(({ path, element }) => (
												<Route key={path} path={path} element={createElement(element)} />
											))}
											<Route path="*" element={<NotFound />} />
										</Route>
									</Routes>
								</AppLocalized>
							}
						/>
					))}

				<Route
					path="*"
					element={
						<AppLocalized locale={defaultLocale}>
							<Routes>
								<Route element={<Layout />}>
									{ROUTES.map(({ path, element }) =>
										path === "" ? (
											<Route key={path} index element={createElement(element)} />
										) : (
											<Route key={path} path={path} element={createElement(element)} />
										),
									)}
									<Route path="*" element={<NotFound />} />
								</Route>
							</Routes>
						</AppLocalized>
					}
				/>
			</Routes>
		</Router>
	);
}
