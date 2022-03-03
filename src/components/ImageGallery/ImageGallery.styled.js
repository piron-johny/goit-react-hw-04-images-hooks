import styled from '@emotion/styled';

export const Paragraph = styled.p`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  color: ${props => props.color || '#000'};
`;
