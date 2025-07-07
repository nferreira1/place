import { cn } from "@/utils/cn";
import { getLocalizedUrl } from "intlayer";
import { useLocale } from "react-intlayer";
import { Link as L } from "react-router-dom";

export function Main({ children, className, ...props }: React.ComponentProps<"section">) {
	return (
		<section className={cn("grid gap-7", className)} {...props}>
			{children}
		</section>
	);
}

export function Section({ children, className, ...props }: React.ComponentProps<"section">) {
	return (
		<section className={cn("space-y-7", className)} {...props}>
			{children}
		</section>
	);
}

export function Title({ text, children, className, ...props }: React.ComponentProps<"h2"> & { text?: string }) {
	return (
		<h2 className={cn("text-primary-foreground", className)} {...props}>
			{text ?? children}
		</h2>
	);
}

export function SubTitle({ text, children, className, ...props }: React.ComponentProps<"h4"> & { text?: string }) {
	return (
		<h4 className={cn("text-primary-foreground", className)} {...props}>
			{text ?? children}
		</h4>
	);
}

export function Button({ children, className, ...props }: React.ComponentProps<"button">) {
	return (
		<button className={cn("cursor-pointer", className)} {...props}>
			{children}
		</button>
	);
}

export function Img({ className, ...props }: React.ComponentProps<"img">) {
	return <img className={cn("rounded", className)} {...props} />;
}

export function HR({ className, ...props }: React.ComponentProps<"hr">) {
	return <hr className={cn("bg-primary-foreground/30 my-6 h-[1px] w-full border-none", className)} {...props} />;
}

export function UL({ children, className, ...props }: React.ComponentProps<"ul">) {
	return (
		<ul className={cn("list-dash", className)} {...props}>
			{children}
		</ul>
	);
}

export function Link({ children, className, to, ...props }: Omit<React.ComponentProps<"a">, "href"> & { to: string }) {
	const { locale } = useLocale();
	const localizedTo = typeof to === "string" ? getLocalizedUrl(to, locale) : to;

	return (
		<L to={localizedTo} className={cn("cursor-pointer", className)} {...props}>
			{children}
		</L>
	);
}

export function A({ children, to, ...props }: Omit<React.ComponentProps<"a">, "href"> & { to: string }) {
	const { locale } = useLocale();
	const localizedTo = typeof to === "string" ? getLocalizedUrl(to, locale) : to;

	return (
		<Link to={localizedTo} className="cursor-pointer" target="_blank" {...props}>
			<span className="link decoration-2">{children}</span>
		</Link>
	);
}

export function P({ children, className, ...props }: React.ComponentProps<"p">) {
	return (
		<p className={cn("space-y-7", className)} {...props}>
			{children}
		</p>
	);
}
