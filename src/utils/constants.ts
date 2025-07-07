import { Home } from "@/pages/home";
import { Tools } from "@/pages/tools";
import { Work } from "@/pages/work";
import { WorkCirculoMilitar } from "@/pages/work.circulo-militar";

export const ROUTES: Array<{
	path: string;
	name: string;
	element: React.ElementType;
	displayFooter?: boolean;
}> = [
	{
		path: "/",
		name: "Home",
		element: Home,
	},

	{
		path: "/work",
		name: "Work",
		element: Work,
	},
	{
		path: "/work/circulo-militar",
		name: "Círculo Militar",
		element: WorkCirculoMilitar,
		displayFooter: true,
	},
	{
		path: "/tools",
		name: "Tools",
		element: Tools,
	},
] as const;
