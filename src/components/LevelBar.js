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
  background-color: #ffca28;
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
      <h2>Level {props.currentLevel}</h2>
      <Track>
        <Bar percentage={calculatePercentage()} />
      </Track>
      <h2>{props.currentLevelGoal}</h2>
    </div>
  );
}
