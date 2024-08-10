import { MembersList } from "./MembersList";
export const Members = () => {
  return (
    <div>
      <div style={{ width: "100%", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#100c0c", color: "white"}}>
        O to lista członków naszego koła (wyświetlani są tutaj członkowie aktywni, którzy już skończyli swoje pierwsze projekty):
      </div>
      <MembersList />
    </div>
  );
};
