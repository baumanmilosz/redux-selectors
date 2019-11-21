import styled, { css } from 'styled-components';

const Button = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
