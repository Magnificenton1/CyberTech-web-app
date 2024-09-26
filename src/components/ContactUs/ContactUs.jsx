import { useEffect } from "react";
import { useLink } from "../Navbar/useLink";
import "./ContactUs.css";

export const ContactUs = () => {
  const { setSelectedNavLink } = useLink();
  useEffect(() => {
    setSelectedNavLink("contact-us");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="contact-container">
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
          <h3>Discord</h3>
          <a href="https://discord.gg/A8HreVFFa5">https://discord.gg/A8HreVFFa5</a>
        </div>
      </div>
    </div>
  );
};
