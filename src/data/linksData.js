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
	indeedIcon,
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
		icon: dark ? githubIconBlack : githubIconWhite,
		name: 'GitHub',
		url: `https://github.com/${username}`,
	},
	{
		icon: dark ? whatsappIconGreen : whatsappIconWhite,
		whatsappIconWhite,
		name: 'WhatsApp',
		url: `https://whatsapp.com/channel/0029Vb4QSVPKLaHhn8SfS33K`,
	},
	{
		icon: dark ? threadsIconBlack : threadsIconWhite,
		name: 'Threads',
		url: `https://www.threads.net/@${username}`,
	},
	{
		icon: dark ? tiktokIconBlack : tiktokIconWhite,
		name: 'TikTok',
		url: `https://www.tiktok.com/@${username}?_t=ZT-8tmP8GTOzNL&_r=1`,
	},
	{
		icon: dark ? instagramIconColor : instagramIconWhite,
		name: 'Instagram',
		url: `https://instagram.com/${username}`,
	},
	{
		icon: indeedIcon,
		name: 'Indeed',
		url: 'https://profile.indeed.com/p/stephenh-uaweqfx',
	},
	{
		icon: dark ? discordIconBlue : discordIconWhite,
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
