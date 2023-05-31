import React from "react";
import styled from "styled-components";

const MainTaskCard = ({ data }: any) => {
  const { taskName, taskGroup, importance, taskStatus } = data;

  console.log(`taskStatus ; ${taskStatus} ${typeof taskStatus}`);

  return (
    <TaskCardContainer>
      {taskStatus === "wip" && (
        <TaskCardInfoContainer>
          <TaskTitleP>{taskName}</TaskTitleP>
          <TaskCategoryP>{taskGroup} |</TaskCategoryP>
          {importance == "true" && <TaskCategoryP> 중요 </TaskCategoryP>}
        </TaskCardInfoContainer>
      )}
    </TaskCardContainer>
  );
};

const TaskCardContainer = styled.div`
  width: 40vw;
  height: 7vh;
  border-radius: 20px;

  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  box-shadow: 0px 0px 10px black;

  button {
    width: 4vw;
    height: 3vh;
    margin-right: 1em;
    border: none;
    border-radius: 5px;

    font-size: 1em;
    font-weight: 900;

    color: #fff;
    background-color: #df3c3c;
  }

  button:hover {
    background: #750c0c;
    color: #fff;
  }
`;

const TaskCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`;

const TaskTitleP = styled.p`
  font-size: 15pt;
  font-weight: 900;
`;

const TaskCategoryP = styled.p`
  font-weight: 100;
`;

const TaskStatusBanner = styled.div`
  width: 80px;
  height: 30px;
  text-align: center;
  font-size: 12pt;
  font-weight: 900;
  background-color: yellow;
  border-radius: 10px;
  margin-right: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export default MainTaskCard;
