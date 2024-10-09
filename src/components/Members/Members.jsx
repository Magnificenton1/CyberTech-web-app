import { useEffect } from "react";
import { MembersList } from "./MembersList";
import { useLink } from "../Navbar/useLink";
export const Members = () => {
  const { setSelectedNavLink } = useLink();
  useEffect(() => {
    setSelectedNavLink("members");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center",
        background: "linear-gradient(180deg, #121211 0%, #ffffff 12%)"
       }}
      
    >
      <div className="members-message">
        O to lista członków naszego koła (wyświetlani są tutaj członkowie
        aktywni, którzy udowodnili, że chcą rozwijać przyszłość AI):
      </div>
      <MembersList />
    </div>
  );
};
