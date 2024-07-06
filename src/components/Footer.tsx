import React from 'react';

const Footer: React.FC = () => {
  return (
    <div id="fourth">
      <div className="footer">
        <a href="mailto:d.valiev@innopolis.university" className="logo nav-list__link--active">
          d.valiev@innopolis.university
        </a>
        <div className="social-icons">
          <a href="https://www.vk.com/dorley">
            <img className="social-icon" src="./images/vk.png" alt="VK" />
          </a>
          <a href="https://www.youtube.com/channel/UCcvCAxRYOdrV-bnIE8otVTQ">
            <img className="social-icon" src="./images/youtube.png" alt="YouTube" />
          </a>
          <a href="https://www.steamcommunity.com/id/Dorley74">
            <img className="social-icon" src="./images/steam.png" alt="Steam" />
          </a>
          <a href="https://github.com/dorley174">
            <img className="social-icon" src="./images/github.png" alt="GitHub" />
          </a>
          <a href="https://discordapp.com/users/579673615902179330">
            <img className="social-icon" src="./images/discord.png" alt="Discord" />
          </a>
          <a href="https://telegram.org/dorley">
            <img className="social-icon" src="./images/telegram.png" alt="Telegram" />
          </a>
          <a href="https://twitch.tv/dorleyyyy">
            <img className="social-icon" src="./images/twitch.png" alt="twitch" />
          </a>
          <a href="https://ru.pinterest.com/Dorleyy/">
            <img className="social-icon" src="./images/pinterest.png" alt="Pinterest" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
