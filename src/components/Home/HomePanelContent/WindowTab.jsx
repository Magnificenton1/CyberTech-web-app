import './WindowTab.css';
import PropTypes from 'prop-types';

export const WindowTab = ({text}) => {
  return (
    <>
      <div className="window-tab">
        <div className="tab-section-1">
          <div className="text-tab">{text}</div>
          <div className="close-tab">x</div>
          {/* <div className='new-tab'>+</div> */}
        </div>
        <div className="tab-section-2">
          {/* <div className="minimalize-tab">-</div>
          <div className="full-screen-tab">[]</div>
          <div className="window-close-tab">x</div> */}
        </div>
      </div>
      <div></div>
    </>
  );
};

WindowTab.propTypes = {
  text: PropTypes.string.isRequired,
};
