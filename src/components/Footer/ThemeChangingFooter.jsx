import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import "./Footer.css";
import { discord_url, facebook_url } from "../../EditableThings/Links/links";
import { useTheme } from "../Theme/useTheme";

export const ThemeChangingFooter = () => {
    const { theme} = useTheme();
  return (
    <div className={`footer footer-${theme}`}>
      <div className="science-club-div">
        <div>CyberTech: Linked by Cybertech</div>
        Kontakt:{" "}
        <a href="mailto:cybertech-pwr@proton.me" target="_blank">
          cybertech-pwr@proton.me
        </a>
        <div>
          Social media:{" "}
          <a href={facebook_url} target="_blank">
            <FaFacebookSquare />
          </a>{" "}
          <a href={discord_url} target="_blank">
            <FaDiscord />
          </a>
        </div>
      </div>
      <div className="creator-div">
        <div>Strona została wykonana przez: Konrad Florczak</div>
        Kontakt:{" "}
        <a
          href="https://www.linkedin.com/in/konrad-florczak-284831314/"
          target="_blank"
        >
          https://www.linkedin.com/in/konrad-florczak-284831314/
        </a>{" "}
        <div>
          <a href="mailto:281110@student.pwr.edu.pl">
            281110@student.pwr.edu.pl
          </a>
        </div>
        <div>
          Social media:{" "}
          <a href="https://github.com/Magnificenton1" target="_blank">
            <FaGithubSquare />
          </a>{" "}
          <a href="https://www.instagram.com/flonrad_korczak/" target="_blank">
            <FaInstagram />
          </a>{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100004989917685"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </div>
  );
};
