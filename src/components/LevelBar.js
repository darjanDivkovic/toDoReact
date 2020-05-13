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
  background: linear-gradient(90deg, rgba(254,100,100,1) 0%, rgba(255,202,40,1) 52%, rgba(92,184,92,1) 100%);
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
      <h2 style={{float: "right", fontSize: "15px", color: "#ffca28"}}>to next lvl: {props.currentLevelGoal-props.currentLevelProgress}</h2>
    </div>
  );
}
