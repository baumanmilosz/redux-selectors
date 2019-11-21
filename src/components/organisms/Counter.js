import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { incrementCounter as incrementCounterAction } from 'store/actions/counterActions';
import { selectCounter } from 'store/reducers/selectors';

const StyledWrapper = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
`;

const StyledSpan = styled.span`
  font-weight: ${({ theme }) => theme.bold};
`;

class Counter extends Component {
  componentDidMount() {
    const { incrementCounter } = this.props;
    setInterval(() => {
      incrementCounter();
    }, 1000);
  }

  render() {
    const { counter } = this.props;
    return (
      <StyledWrapper>
        Time on website: <StyledSpan>{counter} sec</StyledSpan>
      </StyledWrapper>
    );
  }
}

Counter.propTypes = {
  incrementCounter: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
  return {
    counter: selectCounter(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch(incrementCounterAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
