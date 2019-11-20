import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button';
import Paragraph from 'components/atoms/Paragraph';
import { connect } from 'react-redux';
import { changeMode } from 'store/actions';

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
  &:empty {
    background-color: red;
  }
`;

const TaskItem = ({ title }) => (
  <ListItem>
    <Paragraph>{title}</Paragraph>
  </ListItem>
);

TaskItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TaskItem;
