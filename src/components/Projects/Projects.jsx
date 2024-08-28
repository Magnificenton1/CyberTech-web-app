import { useEffect } from "react";
import { useLink } from "../Navbar/useLink";

export const Projects = () => {
  const { setSelectedNavLink } = useLink();
  useEffect(() => {
    setSelectedNavLink("projects");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>projects</div>;
};
