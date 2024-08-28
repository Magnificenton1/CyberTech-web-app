import { useEffect } from "react";
import { useLink } from "../Navbar/useLink";

export const Projects = () => {
  const { setSelectedNavLink} = useLink();
  useEffect(() => {
    setSelectedNavLink("projects")
  }, []);
  return <div>projects</div>;
};
