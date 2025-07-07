import { Locales, type IntlayerConfig } from "intlayer";

export default {
	internationalization: {
		locales: [Locales.ENGLISH, Locales.PORTUGUESE],
		defaultLocale: Locales.ENGLISH,
	},
	middleware: {
		prefixDefault: false,
	},
	content: {
		fileExtensions: ["*.i18n.ts", "*.i18n.tsx"],
	},
} satisfies IntlayerConfig;
