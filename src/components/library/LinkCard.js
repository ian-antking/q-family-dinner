import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkCard = styled(Link)`
  width: calc(100% - 20px);
  margin: 10px 10px 20px 10px;
  max-width: 300px;
  background: ${(props) => props.theme.cardBackground};
  border: 2px solid ${(props) => props.theme.cardBorder};
  border-radius: 5px;
  color: ${(props) => props.theme.cardText};
  display: flex;
  flex-flow: column nowrap;

  
  &:link {
    color: ${(props) => props.theme.cardHeadingText};
    text-decoration: none;
  }

  &:visited{
    color: ${(props) => props.theme.cardHeadingText};
    text-decoration: none;
  }

  &:active {
    color: ${(props) => props.theme.cardHeadingText};
    text-decoration: none;
  }
    
  &:hover{
    color: ${(props) => props.theme.cardHeadingText};
    text-decoration: none;
  }
`;

export default LinkCard;
