import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import TaskItem from 'components/molecules/TaskItem';
import { connect } from 'react-redux';
import { selectTasks, selectCompletedTasks } from 'store/reducers/rootReducer';
import Button from 'components/atoms/Button';
import MainTemplate from 'template/MainTemplate';

const TasksListWrapper = styled.div`
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 600px;
  border: 2px solid ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.grey};
  border-radius: 5px;
`;

const InnerWrapper = styled.div`
  display: flex;
`;

const TasksList = styled.ul`
  margin: 10px;
  list-style-type: none;
`;

class App extends Component {
  state = {
    allTasks: true,
    filteredTasks: false,
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state === nextState) return false;
    return true;
  }

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
    const { allTasks, filteredTasks } = this.state;
    const { tasks, completedTasks } = this.props;
    return (
      <MainTemplate>
        <TasksListWrapper>
          <Heading>Tasks list</Heading>
          <InnerWrapper>
            <Button onClick={this.handleAllTasks} active={allTasks}>
              All tasks
            </Button>
            <Button onClick={this.handleFilteredTasks} active={filteredTasks}>
              Filtered tasks
            </Button>
          </InnerWrapper>
          <TasksList>
            {allTasks ? (
              <>
                {tasks.map(({ id, title }) => (
                  <TaskItem key={id} id={id} title={title} />
                ))}
              </>
            ) : null}
            {filteredTasks ? (
              <>
                {completedTasks.map(({ id, title }) => (
                  <TaskItem key={id} id={id} title={title} />
                ))}
              </>
            ) : null}
          </TasksList>
        </TasksListWrapper>
      </MainTemplate>
    );
  }
}

App.propTypes = {
  completedTasks: PropTypes.arrayOf(PropTypes.object),
};

App.defaultProps = {
  completedTasks: [],
};

const mapStateToProps = state => {
  return {
    tasks: selectTasks(state),
    completedTasks: selectCompletedTasks(state),
  };
};

export default connect(mapStateToProps)(App);
