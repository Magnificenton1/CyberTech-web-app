import { useTheme } from "../Theme/useTheme";
import { WindowPanel } from "../WindowComponent/WindowPanel";
// import placeholder600x400 from "./../../assets/placeholder600x400.jpg"
import "./Members.css";
import PropTypes from "prop-types";
export const MemberCard = ({
  firstName,
  lastName,
  role,
  desc,
  image,
  projects,
}) => {
  const { theme } = useTheme();
  return (
    <WindowPanel text={role} class_number={4}>
      <div className="member-card">
        <div className="member-desc">
          <div
            style={{
              position: "absolute",
              width: "100%",
              minHeight: "100px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <div className={`member-name member-name-${theme}`}>
              {firstName} {lastName}
            </div>
            <div>{desc}</div>
            {projects.length === 0 ||
            (projects.length === 1 && projects[0] === "") ? null : (
              <div style={{ color: "white" }}>
                <div className={`member-name-${theme}`}>Projekty: </div>
                {projects.map((project, index) => (
                  <span key={index}>{project} </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <img className="member-img" src={image} />
      </div>
    </WindowPanel>
  );
};

MemberCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
