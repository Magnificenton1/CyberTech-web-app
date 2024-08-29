import { useEffect } from "react";
import { useLink } from "../Navbar/useLink";
import "./ContactUs.css";

export const ContactUs = () => {
  const { setSelectedNavLink } = useLink();
  useEffect(() => {
    setSelectedNavLink("contact-us");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Contact Us</div>;
};
