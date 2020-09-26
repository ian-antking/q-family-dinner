import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledArticleCard = styled(Link)`
  border-radius: 5px;
  background: whitesmoke;
  border: 1px solid darkslategrey;
  width: 300px;
  display: flex;
  flex-flow: column nowrap;

  img {
    width: 100%;
    height: 200px;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
  }

  h1 {
    margin: 15px;
  }

  p {
    margin: 0 15px 10px 15px
  }

  .author {
    font-weight: bold;
  }
`

const ArticleCard = ({ targetArticleData }) => {

  return (
    <StyledArticleCard to={targetArticleData.data.target.fields.slug}>
      <img src="https://images.unsplash.com/photo-1535568824865-a801351e8483?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80" alt="A ring donut with pink icing, blueberries and a drizzle of white icing."/>
      <h1>Page Title</h1>
      <p>This blurb is an introduction to the page.</p>
      <p className="author">David Arrowsmith</p>
    </StyledArticleCard>
  )
};

export default ArticleCard;