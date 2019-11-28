import styled, { css } from 'styled-components';

const Button = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  ${({ toggle }) =>
    toggle &&
    css`
      flex-basis: initial;
      padding: 5px 10px;
      font-size: 1.3rem;
      font-weight: ${({ theme }) => theme.bold};
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.black};
      ${({ darkMode }) =>
        darkMode &&
        css`
          color: ${({ theme }) => theme.black};
          background-color: ${({ theme }) => theme.white};
        `}
    `}
`;

export default Button;
