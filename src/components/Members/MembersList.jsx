import { MemberCard } from "./MemberCard";
import MembersJSON from "./members.json";
// zmieniamy JSONa jeśli chcemy zmieniać członków itp

import "./Members.css";
export const MembersList = () => {
  return (
    <div className="members-list">
      {MembersJSON.members.map((member, id) => {
        return (
          <MemberCard
            key={id}
            firstName={member.firstname}
            lastName={member.lastName}
            role={member.role}
            desc={member.describtion}
            projects={member.projects}
            image={member.image}
            color={member.color}
          />
        );
      })}
    </div>
  );
};
