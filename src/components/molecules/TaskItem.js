import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button';
import Paragraph from 'components/atoms/Paragraph';
import { connect } from 'react-redux';
import { changeMode } from 'store/actions';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #e9e9e9;
  padding: 20px;
  background-color: #fff;
  color: #fff;
  &:hover {
    background-color: #e9e9e9;
  }
  ${({ darkMode }) =>
    darkMode &&
    css`
      background-color: #000;
      color: #fff;
      border-bottom: 2px solid #fff;
      &:hover {
        background-color: #999;
      }
    `}
`;

class TaskItem extends Component {
  state = {
    darkMode: false,
  };

  handleMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
    const { darkMode } = this.state;
    const { id, title, changeMode } = this.props;

    return (
      <ListItem darkMode={darkMode}>
        {darkMode ? <Paragraph white>{title}</Paragraph> : <Paragraph>{title}</Paragraph>}
        <Button
          onClick={() => {
            this.handleMode();
            changeMode(id);
          }}
        >
          Click
        </Button>
      </ListItem>
    );
  }
}

TaskItem.propTypes = {
  title: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    changeMode: id => dispatch(changeMode(id)),
  };
};

export default connect(null, mapDispatchToProps)(TaskItem);
