import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const MainTemplate = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledWrapper>
      <GlobalStyle />
      {children}
    </StyledWrapper>
  </ThemeProvider>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
