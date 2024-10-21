import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "@data/index";
import { getCollection } from "astro:content";

export async function GET(context) {
	const [posts, thoughts, timeline , desings] = await Promise.all([
		getCollection("writing"),
		getCollection("thought"),
		getCollection("timeline"),
		getCollection("desings"),
	]);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: [
			...posts.map((post) => ({
				...post.data,
				link: `/writings/${post.slug}/`,
			})),
			...thoughts.map((thought) => ({
				...thought.data,
				link: `/thoughts/${thought.slug}/`,
			})),
			...timeline.map((event) => ({
				...event.data,
				link: `/timeline/${event.slug}/`,
			})),
			...desings.map((design) => ({
				...design.data,
				link: `/designs/${design.slug}/`,
			})),
		],
	});
}
