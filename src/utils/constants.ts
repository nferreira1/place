import { Home } from "@/pages/home";
import { Tools } from "@/pages/tools";
import { Work } from "@/pages/work";
import { WorkCirculoMilitar } from "@/pages/work.circulo-militar";

export const ROUTES: Array<{
	path: string;
	name: string;
	element: React.ElementType;
	i18n?: string;
}> = [
	{
		path: "/",
		name: "Home",
		element: Home,
		i18n: "home",
	},
	{
		path: "/work",
		name: "Work",
		element: Work,
		i18n: "work",
	},
	{
		path: "/work/circulo-militar",
		name: "Círculo Militar",
		element: WorkCirculoMilitar,
	},
	{
		path: "/tools",
		name: "Tools",
		element: Tools,
		i18n: "tools",
	},
] as const;
