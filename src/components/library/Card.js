import styled from 'styled-components';

const Card = styled.div`
  width: calc(100% - 60px);
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.cardBorder};
  background: ${(props) => props.theme.cardBackground};
  display: flex;
  flex-flow: column nowrap;
`;

export default Card;
