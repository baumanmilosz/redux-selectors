import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import styled from 'styled-components';
import TaskItem from 'components/molecules/TaskItem';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const TasksList = styled.ul`
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 600px;
  border: 2px solid #000;
  list-style-type: none;
`;

const App = () => (
  <StyledWrapper>
    <GlobalStyle />
    <TasksList>
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </TasksList>
  </StyledWrapper>
);

export default App;
