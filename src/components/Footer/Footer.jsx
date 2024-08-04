import { useTheme } from "../Theme/useTheme";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className={`footer footer-container-${theme}`}>
      <div className="science-club-div"></div>
      <div className="creator-div">
        <div>Strona została wykonana przez: Konrad Florczak</div>
        Kontakt:{" "}
        <a
          href="https://www.linkedin.com/in/konrad-florczak-284831314/"
          target="_blank"
        >
          https://www.linkedin.com/in/konrad-florczak-284831314/
        </a>{" "}
        -{" "}
        <a href="mailto:281110@student.pwr.edu.pl">281110@student.pwr.edu.pl</a>
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
