import githubIcon from "../assets/images/github-mark-white.png";
import tiktokIcon from "../assets/images/TikTok_Icon_Black_Circle.png";
import whatsappIcon from "../assets/images/Digital_Glyph_Green.png";
import instagramIcon from "../assets/images/Instagram_Glyph_White.png";
import threadsIcon from "../assets/images/threads-logo-white-01.png";
import discordIcon from "../assets/images/Discord Mark Blue.svg";

// username & links
const username = "K1ngHandy";
const linksData = [
  {
    icon: tiktokIcon,
    name: "TikTok",
    url: `https://www.tiktok.com/@${username}?_t=ZT-8tmP8GTOzNL&_r=1`,
  },
  { icon: githubIcon, name: "GitHub", url: `https://github.com/${username}` },
  {
    icon: threadsIcon,
    name: "Threads",
    url: `https://www.threads.net/@${username}`,
  },
  {
    icon: discordIcon,
    name: "Discord",
    url: `https://discord.com/channels/1140423533625888889/1140423534372470806`,
  },
  {
    icon: whatsappIcon,
    name: "WhatsApp",
    url: `https://whatsapp.com/channel/0029Vb4QSVPKLaHhn8SfS33K`,
  },
  {
    icon: instagramIcon,
    name: "Instagram",
    url: `https://instagram.com/${username}`,
  },
];

export default linksData;
