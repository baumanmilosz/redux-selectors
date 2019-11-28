import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.bold};
  color: #000;
  ${({ darkMode }) =>
    darkMode &&
    css`
      color: ${({ theme }) => theme.white};
    `}
`;

export default Paragraph;
