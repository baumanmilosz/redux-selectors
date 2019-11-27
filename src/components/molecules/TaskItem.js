import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';

const ListItem = styled.li`
  width: 100%;
  padding: 20px;
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.grey100};
  color: ${({ theme }) => theme.white};
  border-radius: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.grey200};
  }
`;

class TaskItem extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          loading: false,
        }),
      3000,
    );
  }

  render() {
    const { loading } = this.state;
    const { title } = this.props;
    return (
      <ListItem>
        <Paragraph>{!loading ? title : 'Loading...'}</Paragraph>
      </ListItem>
    );
  }
}

TaskItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TaskItem;
