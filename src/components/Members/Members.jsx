import { MembersList } from "./MembersList";
export const Members = () => {
  return (
    <div>
      <div style={{ width: "100%", height: "120px", display: "flex", justifyContent: "center", alignItems: "center", color: "black",textAlign: "center", background: "linear-gradient(180deg, #524e4e 0%, rgba(255,255,255,1) 91%)" }}>
        O to lista członków naszego koła (wyświetlani są tutaj członkowie aktywni, którzy już skończyli swoje pierwsze projekty):
      </div>
      <MembersList />
    </div>
  );
};

