import {
	githubIconBlack,
	tiktokIconBlack,
	whatsappIconGreen,
	instagramIconColor,
	threadsIconBlack,
	indeedIconBlue,
	discordIconBlue,
	youtubeIcon,
	blueskyIconBlue,
} from '../assets/images';

const username = 'K1ngHandy';
const linksData = [
	{
		icon: youtubeIcon,
		name: 'YouTube',
		url: `https://www.youtube.com/@${username}`,
	},
	{
		icon: githubIconBlack,
		name: 'GitHub',
		url: `https://github.com/${username}`,
	},
	{
		icon: whatsappIconGreen,
		name: 'WhatsApp',
		url: `https://whatsapp.com/channel/0029Vb4QSVPKLaHhn8SfS33K`,
	},
	{
		icon: blueskyIconBlue,
		name: 'Bluesky',
		url: `https://bsky.app/profile/${username}.bsky.social`,
	},
	{
		icon: tiktokIconBlack,
		name: 'TikTok',
		url: `https://www.tiktok.com/@${username}?_t=ZT-8tmP8GTOzNL&_r=1`,
	},
	{
		icon: instagramIconColor,
		name: 'Instagram',
		url: `https://instagram.com/${username}`,
	},
	{
		icon: indeedIconBlue,
		name: 'Indeed',
		url: 'https://profile.indeed.com/p/stephenh-uaweqfx',
	},
	{
		icon: discordIconBlue,
		name: 'Discord',
		url: `https://discord.com/channels/1140423533625888889/1140423534372470806`,
	},
	{
		icon: threadsIconBlack,
		name: 'Threads',
		url: `https://www.threads.net/@${username}`,
	},
];

export default linksData;
