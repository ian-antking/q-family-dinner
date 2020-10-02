import styled from 'styled-components';

const Heading = styled.h1`
  max-width: 80%;
  max-height: 80%;
  padding: 10px 20px;
  color: ${(props) => props.theme.headingText};
  text-align: center;
  border: 2px solid ${(props) => props.theme.cardBorder};
  border-radius: 5px;
  background: ${(props) => props.theme.cardBackground};
  display: flex;
`;

export default Heading;
