import {
	logoLight,
	musicIcon,
	githubIconBlack,
	tikTokIconBlack,
	whatsappIconGreen,
	instagramIconColor,
	threadsIconBlack,
	indeedIconBlue,
	redditIcon,
	youtubeIcon,
	blueskyIconBlue,
	wcupaIcon,
	bloomIcon,
} from '../assets/images';

export const profile = {
	id: 'profile',
	username: 'K1ngHandy',
	location: 'Downingtown, PA',
	logo: logoLight,
	alt: 'K1ngHandy Logo',
};

const username = profile.username;

const linksData = [
	{
		id: 'music',
		icon: musicIcon,
		name: 'Phrasing',
		alt: 'K1ngHandy - Phrasing',
		url: 'https://www.youtube.com/watch?v=O2GVLF2Ygjs',
	},
	{
		id: 'youtube',
		icon: youtubeIcon,
		name: 'YouTube',
		alt: 'YouTube',
		url: `https://www.youtube.com/@${username}`,
	},
	{
		id: 'github',
		icon: githubIconBlack,
		name: 'GitHub',
		alt: 'GitHub',
		url: `https://github.com/${username}`,
	},
	{
		id: 'whatsapp',
		icon: whatsappIconGreen,
		name: 'WhatsApp',
		alt: 'WhatsApp',
		url: `https://whatsapp.com/channel/0029Vb4QSVPKLaHhn8SfS33K`,
	},
	{
		id: 'bluesky',
		icon: blueskyIconBlue,
		name: 'Bluesky',
		alt: 'Bluesky',
		url: `https://bsky.app/profile/${username}.xyz`,
	},
	{
		id: 'tiktok',
		icon: tikTokIconBlack,
		name: 'TikTok',
		alt: 'TikTok',
		url: `https://www.tiktok.com/@${username}?_t=ZT-8tmP8GTOzNL&_r=1`,
	},
	{
		id: 'instagram',
		icon: instagramIconColor,
		name: 'Instagram',
		alt: 'Instagram',
		url: `https://instagram.com/${username}`,
	},
	{
		id: 'indeed',
		icon: indeedIconBlue,
		name: 'Indeed',
		alt: 'Indeed',
		url: 'https://profile.indeed.com/p/stephenh-uaweqfx',
	},
	{
		id: 'reddit',
		icon: redditIcon,
		name: 'Reddit',
		alt: 'Reddit',
		url: `https://www.reddit.com/r/${username}/`,
	},
	// {
	//  id: 'discord',
	// 	icon: discordIconBlue,
	// 	name: 'Discord',
	// 	alt: 'Discord',
	// 	url: `https://discord.com/channels/1140423533625888889/1140423534372470806`,
	// },
	{
		id: 'threads',
		icon: threadsIconBlack,
		name: 'Threads',
		alt: 'Threads',
		url: `https://www.threads.net/@${username}`,
	},
	{
		id: 'wcupa',
		icon: wcupaIcon,
		name: 'West Chester University of PA',
		alt: 'West Chester University of PA',
		url: 'https://www.wcupa.edu/',
	},
	{
		id: 'bloom',
		icon: bloomIcon,
		name: 'Bloom Institute of Technology',
		alt: 'Bloom Institute of Technology',
		url: 'https://www.bloomtech.com/',
	},
];

export default linksData;
