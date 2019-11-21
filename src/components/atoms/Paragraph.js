import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.bold};
  color: #000;
`;

export default Paragraph;
