// import "./JoinButton.css";
export const JoinButton = () => {
  return (
    <>
      <svg width="0" height="0">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="6"
          />
          <feDisplacementMap in="SourceGraphic" scale="100" />
        </filter>
      </svg>
      <div className="wrapper">
        <div className="button _1">
          <span>hover</span>
          <div className="back"></div>
        </div>
      </div>
    </>
  );
};
