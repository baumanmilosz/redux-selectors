import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: 1.6rem;
  color: #000;
  ${({ white }) =>
    white &&
    css`
      color: #fff;
    `}
`;

export default Paragraph;
