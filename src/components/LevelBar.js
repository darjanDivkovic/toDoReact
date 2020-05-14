import React from "react";
import styled from "styled-components";

const Track = styled.div`
  width: 100%;
  height: 20px;
  background-color: #212224;
  border-radius: 10px;
`;

const Bar = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background: linear-gradient(90deg, rgba(30,119,239,1) 0%, rgba(120,107,236,0.9248074229691877) 61%);
  border-radius: 8px;
  transition: width 0.3s ease-in-out;
`;

export default function LevelBar(props) {
  function calculatePercentage() {
    if (props.currentLevelProgress === 0) {
      return 0;
    }

    let percentage =
      (props.currentLevelProgress / props.currentLevelGoal) * 100;

    return percentage;
  }

  return (
    <div className="level-bar-container">
      <Track>
        <Bar percentage={calculatePercentage()} />
      </Track>
      <h2 style={{float: "right", fontSize: "15px", color: "#1e77ef"}}>to next lvl: {props.currentLevelGoal-props.currentLevelProgress}</h2>
    </div>
  );
}
