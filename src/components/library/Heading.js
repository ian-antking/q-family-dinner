import styled from 'styled-components';

const Heading = styled.h1`
  width: fit-content;
  padding: 10px 20px;
  color: ${(props) => props.theme.headingText};
  text-align: center;
  border: 2px solid ${(props) => props.theme.cardBorder};
  border-radius: 5px;
  background: ${(props) => props.theme.cardBackground};
  display: flex;
`;

export default Heading;
