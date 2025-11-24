export type Experience = {
	slug: string;
	title: string;
	subtitle: string;
	summary: string;
	image: string;
	badge: string;
	highlights: { title: string; detail: string }[];
	description: string[];
	gallery: string[];
	ctaLabel: string;
};

export const experiences: Experience[] = [
	{
		slug: "imperial-river-suite",
		title: "Imperial River Suite",
		subtitle: "Panoramic views over the Dnipro River",
		summary:
			"Our crown jewel duplex features a private conservatory, marble bath, and a butler team on call around the clock.",
		image:
			"https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
		badge: "Signature Suite",
		highlights: [
			{
				title: "Skyline Observatory",
				detail: "270° vistas with electrochromic glass and a private telescope library.",
			},
			{
				title: "Private Gallery",
				detail: "Curated art collection celebrating Ukrainian modernism and emerging sculptors.",
			},
			{
				title: "Entertaining Level",
				detail: "Dining salon for twelve, serviced by our chef's brigade with Gueridon service.",
			},
			{
				title: "Wellness Core",
				detail: "Hermès amenities, Technogym micro studio, and on-call bodywork artisans.",
			},
		],
		description: [
			"A double-height lounge framed by smoked-oak walls opens onto a winter garden where breakfast is served above the city.",
			"The master level introduces a spa bathroom carved from Calacatta Viola marble, a dressing suite with bespoke atelier fittings, and a discreet study for private meetings.",
		],
		gallery: [
			"https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
			"https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
			"https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
		],
		ctaLabel: "Request Penthouse",
	},
	{
		slug: "kyiv-rooftop-club",
		title: "Kyiv Rooftop Club",
		subtitle: "Sunset cocktails & al fresco cinema",
		summary:
			"A members-only hideaway suspended on level 27 with an infinity edge pool, DJ-led soundscape, and retractable glass roof.",
		image:
			"https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1600&q=80",
		badge: "Skyline Experience",
		highlights: [
			{
				title: "Champagne Sabrage",
				detail: "Sunset ritual accompanied by live saxophone and Laurent-Perrier vintages.",
			},
			{
				title: "Poolside Service",
				detail: "Cabanas with personal mixologists and chilled towel sommeliers.",
			},
			{
				title: "Fire Bar",
				detail: "Chef's live hearth showcasing Black Sea cuisine & caviar pairings.",
			},
			{
				title: "Al Fresco Cinema",
				detail: "Screenings curated by Kyiv Film Festival with wireless Devialet audio.",
			},
		],
		description: [
			"Designed by Studio Laska, the club blends smoked mirrors, travertine, and lush botanicals for an atmosphere that shifts from serene daytime lounge to electric night venue.",
			"Residents enjoy priority cabana reservations, seasonal tasting flights, and access to monthly cultural salons hosted under the stars.",
		],
		gallery: [
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
			"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
			"https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
		],
		ctaLabel: "Reserve a Cabana",
	},
	{
		slug: "atelier-gastronomique",
		title: "Atelier Gastronomique",
		subtitle: "Six-course tasting celebrating Ukrainian terroir",
		summary:
			"Chef Olena Boyko reinterprets Kyiv’s culinary heritage with table-side storytelling, ferment ateliers, and a cellar of 1,200 labels.",
		image:
			"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
		badge: "Dining",
		highlights: [
			{
				title: "Chef's Table",
				detail: "Eight-seat theatre beside the open hearth with direct dialogue to the brigade.",
			},
			{
				title: "Cellar Program",
				detail: "Rare wine pairings curated by our head sommelier with Coravin service.",
			},
			{
				title: "Aroma Library",
				detail: "Immersive atelier featuring herbs, ferments, and bespoke bread culture.",
			},
			{
				title: "Farm Partnerships",
				detail: "Seasonal collaborations with Ukrainian growers and foragers.",
			},
		],
		description: [
			"The dining room glows with alabaster lighting, leather banquettes, and a floating garden ceiling perfumed with herbs from the hotel’s rooftop greenhouse.",
			"Tasting menus evolve monthly, weaving heirloom recipes with avant-garde techniques to create poetic plates that honor land and sea.",
		],
		gallery: [
			"https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
			"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
			"https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=1200&q=80",
		],
		ctaLabel: "Book Chef’s Table",
	},
	{
		slug: "holistic-spa-gallery",
		title: "Holistic Spa Gallery",
		subtitle: "Banya rituals & oxygen IV lounge",
		summary:
			"2,000 m² dedicated to wellbeing: crystal steam suites, Watsu pool, quartz sand beds, and partnerships with Augustinus Bader and 111SKIN.",
		image:
			"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
		badge: "Wellness",
		highlights: [
			{
				title: "Juniper Banya",
				detail: "Signature Kyiv banya infused with juniper steam and artisan veniks.",
			},
			{
				title: "Sound Dome",
				detail: "Sound therapy temple with live instrumentalists and vibro-acoustic beds.",
			},
			{
				title: "Vitality Circuit",
				detail: "Private vitality pool, snow fountain, and quartz sand beds.",
			},
			{
				title: "Detox Bar",
				detail: "Nutritionist-designed tasting bar championing botanicals and cold-pressed elixirs.",
			},
		],
		description: [
			"Guests begin with a bespoke diagnostic ritual before moving through thermal circuits and tailored treatments delivered by resident wellness artisans.",
			"The gallery features rotating installations by Ukrainian photographers, transforming the spa into a calming cultural journey.",
		],
		gallery: [
			"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
			"https://images.unsplash.com/photo-1477936432016-8172ed08637e?auto=format&fit=crop&w=1200&q=80",
			"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
		],
		ctaLabel: "Design My Ritual",
	},
];

