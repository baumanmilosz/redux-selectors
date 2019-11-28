import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import { connect } from 'react-redux';
import { changeMode as changeModeAction } from 'store/actions/tasksActions';

const ListItem = styled.li`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.grey100};
  color: ${({ theme }) => theme.white};
  border-radius: 10px;
  ${({ darkMode }) =>
    darkMode &&
    css`
      background-color: ${({ theme }) => theme.black};
    `}
`;

class TaskItem extends Component {
  state = {
    loading: true,
    darkMode: false,
  };

  componentDidMount() {
    this.loader = setTimeout(
      () =>
        this.setState({
          loading: false,
        }),
      3000,
    );
  }

  componentWillUnmount() {
    clearTimeout(this.loader);
  }

  handleDarkMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
      loading: true,
    }));
    this.loader = setTimeout(
      () =>
        this.setState({
          loading: false,
        }),
      3000,
    );
  };

  render() {
    const { loading } = this.state;
    const { id, title, isDark, changeMode } = this.props;

    return (
      <>
        {isDark ? (
          <ListItem darkMode>
            {loading ? (
              <Paragraph darkMode>Loading...</Paragraph>
            ) : (
              <>
                <Paragraph darkMode>{title}</Paragraph>
                <Button
                  onClick={() => {
                    this.handleDarkMode();
                    changeMode(id);
                  }}
                  toggle
                  darkMode
                >
                  Toggle
                </Button>
              </>
            )}
          </ListItem>
        ) : (
          <ListItem>
            {loading ? (
              <Paragraph>Loading...</Paragraph>
            ) : (
              <>
                <Paragraph>{title}</Paragraph>
                <Button
                  onClick={() => {
                    this.handleDarkMode();
                    changeMode(id);
                  }}
                  toggle
                >
                  Toggle
                </Button>
              </>
            )}
          </ListItem>
        )}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeMode: id => dispatch(changeModeAction(id)),
  };
};

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isDark: PropTypes.bool.isRequired,
  changeMode: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TaskItem);
