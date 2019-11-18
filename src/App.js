import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import styled from 'styled-components';
import TaskItem from 'components/molecules/TaskItem';
import { connect } from 'react-redux';

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

const App = ({ tasks }) => (
  <StyledWrapper>
    <GlobalStyle />
    <TasksList>
      {tasks.map(({ id, title }) => (
        <TaskItem key={id} id={id} title={title} />
      ))}
    </TasksList>
  </StyledWrapper>
);

App.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};

App.defaultProps = {
  tasks: [],
};

const mapStateToProps = state => {
  const { tasks } = state;
  return {
    tasks,
  };
};

export default connect(mapStateToProps)(App);
