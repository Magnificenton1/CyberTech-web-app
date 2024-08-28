import { useEffect } from "react";
import { MembersList } from "./MembersList";
import { useLink } from "../Navbar/useLink";
export const Members = () => {
  const { setSelectedNavLink } = useLink();
  useEffect(() => {
    setSelectedNavLink("members");
  }, []);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="members-message">
        O to lista członków naszego koła (wyświetlani są tutaj członkowie
        aktywni, którzy już skończyli swoje pierwsze projekty):
      </div>
      <MembersList />
    </div>
  );
};
