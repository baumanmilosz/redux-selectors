import styled, { css } from 'styled-components';

const Button = styled.div`
  flex-grow: 1;
  text-align: center;
  padding: 10px;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.grey200};
  text-transform: uppercase;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.black};
      border-bottom: 2px solid ${({ theme }) => theme.black};
    `}
`;

export default Button;
