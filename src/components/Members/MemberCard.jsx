import "./Members.css";
import PropTypes from 'prop-types';
export const MemberCard = ({ firstName, lastName, role }) => {
  return (
    <div className="member-card">
      <div>
        Name: {firstName} {lastName}
      </div>
      <div>Role: {role}</div>
      <div className="member-card-image"></div>
    </div>
  );
};

MemberCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};