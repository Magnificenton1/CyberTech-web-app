import { useTheme } from "../Theme/useTheme";
import { WindowPanel } from "../WindowComponent/WindowPanel";
import "./Members.css";
import PropTypes from "prop-types";
export const MemberCard = ({
  firstName,
  lastName,
  role,
  desc,
  image,
  projects,
  color
}) => {
  const { theme } = useTheme();
  return (// color is a bool in json that tells if the panel needs to be highlighted, highlighted panel has class_number 5
          // default members panel has number 4
    <WindowPanel text={role} class_number={color ? 6 : 5}>
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
            {desc.length === 0 ||
            (desc.length > 0 && desc === "") ? null : (
              <div>{desc}</div>
            )}
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
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.number.isRequired,
};
