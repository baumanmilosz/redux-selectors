import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Heading from 'components/atoms/Heading';
import TaskItem from 'components/molecules/TaskItem';
import Button from 'components/atoms/Button';
import { selectTasks, selectCompletedTasks } from 'store/reducers/selectors';

const TasksListWrapper = styled.div`
  width: 400px;
  min-height: 600px;
  border: 2px solid ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.grey};
  @media (orientation: portrait) and (max-width: 600px) {
    width: 95vw;
  }
  @media (orientation: landscape) and (max-width: 768px) {
    width: 95vw;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
`;

const TasksList = styled.ul`
  margin: 10px;
  list-style-type: none;
`;

let counter = 0;

class Tasks extends Component {
  state = {
    allTasks: true,
    filteredTasks: false,
  };

  handleAllTasks = () => {
    this.setState({
      allTasks: true,
      filteredTasks: false,
    });
  };

  handleFilteredTasks = () => {
    this.setState({
      allTasks: false,
      filteredTasks: true,
    });
  };

  render() {
    console.log(`Tasks component render ${++counter} time(s)`);
    const { allTasks, filteredTasks } = this.state;
    const { tasks, completedTasks, children } = this.props;
    return (
      <TasksListWrapper>
        {children}
        <Heading>Tasks list</Heading>
        <InnerWrapper>
          <Button onClick={this.handleAllTasks} active={allTasks}>
            All tasks
          </Button>
          <Button onClick={this.handleFilteredTasks} active={filteredTasks}>
            Completed tasks
          </Button>
        </InnerWrapper>
        <TasksList>
          {allTasks ? (
            <>
              {tasks.map(({ id, title, darkMode }) => (
                <TaskItem key={id} id={id} title={title} isDark={darkMode} />
              ))}
            </>
          ) : null}
          {filteredTasks ? (
            <>
              {completedTasks.map(({ id, title, darkMode }) => (
                <TaskItem key={id} id={id} title={title} isDark={darkMode} />
              ))}
            </>
          ) : null}
        </TasksList>
      </TasksListWrapper>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  completedTasks: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

Tasks.defaultProps = {
  tasks: [],
  completedTasks: [],
};

const mapStateToProps = state => {
  return {
    tasks: selectTasks(state),
    completedTasks: selectCompletedTasks(state),
  };
};

export default connect(mapStateToProps)(Tasks);
