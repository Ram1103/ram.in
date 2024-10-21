export const SITE_TITLE = "Ram's Space";
export const SITE_DESCRIPTION = "Internet space of a uncommon generalist.";

export interface MenuItem {
	label: string;
	url: string;
}

// Menu items
export const menuItems: MenuItem[] = [
	{
		label: "home",
		url: "/",
	},
	{
		label: "writings",
		url: "/writings",
	},
	{
		label: "thoughts",
		url: "/thoughts",
	},
	{
		label: "timeline",
		url: "/timeline",
	},
	{
		label: "gallery",
		url: "/gallery",
	},
];
