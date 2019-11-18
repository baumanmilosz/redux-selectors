import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Paragraph from 'components/atoms/Paragraph';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #e9e9e9;
  padding: 20px;
  background-color: #fff;
  &:hover {
    background-color: #e9e9e9;
  }
`;

const TaskItem = ({ title }) => (
  <ListItem>
    <Paragraph>{title}</Paragraph>
    <Button>Click</Button>
  </ListItem>
);

TaskItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TaskItem;
