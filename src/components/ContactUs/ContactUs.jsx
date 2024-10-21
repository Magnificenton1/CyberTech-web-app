import { useEffect } from "react";
import { useLink } from "../Navbar/useLink";
import "./ContactUs.css";
import { useTheme } from "../Theme/useTheme";
import { discord_url, facebook_url } from "../../EditableThings/Links/links";

export const ContactUs = () => {
  const { setSelectedNavLink } = useLink();
  const { theme } = useTheme();
  useEffect(() => {
    setSelectedNavLink("contact-us");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`contact-container contact-container-${theme}`}>
      <div id="contact-box">
        <div className="contact-section">
          <h3>Adres email:</h3>
          <a href="mailto:cybertech-pwr@proton.me">cybertech-pwr@proton.me</a>
        </div>
        <div className="contact-section">
          <h3>Opiekunowie koła:</h3>
          <div>dr inż. Tomasz Janiczek <a href="mailto:tomasz.janiczek@pwr.edu.pl" target="_blank">(tomasz.janiczek@pwr.edu.pl)</a></div>
          dr Marek Bazan <a href="mailto:marek.bazan@pwr.edu.pl">(marek.bazan@pwr.edu.pl)</a>
        </div>
        <div className="contact-section">
          <h3>Opiekun wspierający:</h3>
          dr inż Krzysztof Halawa <a href="mailto:krzysztof.halawa@pwr.edu.pl">(krzysztof.halawa@pwr.edu.pl)</a>
        </div>
        <div className="contact-section">
          <h3>Discord:</h3>
          <a href={discord_url}>{discord_url}</a>
        </div>
        <div className="contact-section">
          <h3>Facebook:</h3>
          <a href={facebook_url}>{facebook_url}</a>
        </div>
      </div>
    </div>
  );
};
