import React from 'react';
import styles from './css/AboutMe.module.css';
import Vk from "../components/images/vk.png";
import Yt from "../components/images/youtube.png";
import Steam from "../components/images/steam.png";
import Git from "../components/images/github.png";
import Ds from "../components/images/discord.png";
import Tg from "../components/images/telegram.png";
import Tw from "../components/images/twitch.png";
import Pi from "../components/images/pinterest.png";

const Footer: React.FC = () => (
  <footer id="fourth" className={styles.footer}>
    <a href="mailto:d.valiev@innopolis.university" className="logo nav-list__link--active">d.valiev@innopolis.university</a>
    <div className={styles.socialIcons}>
      <a href="https://www.vk.com/dorley"><img className={styles.socialIcon} src={Vk} alt="VK" /></a>
      <a href="https://www.youtube.com/channel/UCcvCAxRYOdrV-bnIE8otVTQ"><img className={styles.socialIcon} src={Yt} alt="YouTube" /></a>
      <a href="https://www.steamcommunity.com/id/Dorley74"><img className={styles.socialIcon} src={Steam} alt="Steam" /></a>
      <a href="https://github.com/dorley174"><img className={styles.socialIcon} src={Git} alt="GitHub" /></a>
      <a href="https://discordapp.com/users/579673615902179330"><img className={styles.socialIcon} src={Ds} alt="Discord" /></a>
      <a href="https://telegram.org/dorley"><img className={styles.socialIcon} src={Tg} alt="Telegram" /></a>
      <a href="https://twitch.tv/dorleyyyy"><img className={styles.socialIcon} src={Tw} alt="Twitch" /></a>
      <a href="https://ru.pinterest.com/Dorleyy/"><img className={styles.socialIcon} src={Pi} alt="Pinterest" /></a>
    </div>
  </footer>
);

export default Footer;
