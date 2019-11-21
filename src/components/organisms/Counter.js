import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { incrementCounter as incrementCounterAction } from 'store/actions/counterActions';

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

const mapStateToProps = state => {
  return {
    counter: state.counter.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch(incrementCounterAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
