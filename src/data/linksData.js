import {
	githubIconBlack,
	githubIconWhite,
	tiktokIconBlack,
	tiktokIconWhite,
	whatsappIconGreen,
	whatsappIconWhite,
	instagramIconWhite,
	instagramIconColor,
	threadsIconBlack,
	threadsIconWhite,
	indeedIconBlue,
	indeedIconWhite,
	discordIconBlue,
	discordIconWhite,
	youtubeIcon,
	blueskyIconBlue,
} from '../assets/images';

const getCurrentTheme = () => {
	return window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
};
const dark = getCurrentTheme() === 'dark';

// username & links
const username = 'K1ngHandy';
const linksData = [
	{
		icon: youtubeIcon,
		name: 'YouTube',
		url: `https://www.youtube.com/@${username}`,
	},
	{
		icon: dark ? githubIconWhite : githubIconBlack,
		name: 'GitHub',
		url: `https://github.com/${username}`,
	},
	{
		icon: dark ? whatsappIconWhite : whatsappIconGreen,
		whatsappIconWhite,
		name: 'WhatsApp',
		url: `https://whatsapp.com/channel/0029Vb4QSVPKLaHhn8SfS33K`,
	},
	{
		icon: dark ? threadsIconWhite : threadsIconBlack,
		name: 'Threads',
		url: `https://www.threads.net/@${username}`,
	},
	{
		icon: dark ? tiktokIconWhite : tiktokIconBlack,
		name: 'TikTok',
		url: `https://www.tiktok.com/@${username}?_t=ZT-8tmP8GTOzNL&_r=1`,
	},
	{
		icon: dark ? instagramIconWhite : instagramIconColor,
		name: 'Instagram',
		url: `https://instagram.com/${username}`,
	},
	{
		icon: dark ? indeedIconWhite : indeedIconBlue,
		name: 'Indeed',
		url: 'https://profile.indeed.com/p/stephenh-uaweqfx',
	},
	{
		icon: dark ? discordIconWhite : discordIconBlue,
		name: 'Discord',
		url: `https://discord.com/channels/1140423533625888889/1140423534372470806`,
	},
	{
		icon: blueskyIconBlue,
		name: 'Bluesky',
		url: `https://bsky.app/profile/${username}.bsky.social`,
	},
];

export default linksData;
