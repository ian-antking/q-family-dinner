import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from './Heading';

const StyledHeroImage = styled.div`
  height: fit-content;
  min-height: calc(60vh - 50px);
  margin: 50px 0 0 0;
  width: 100%;
  background-color: ${(props) => props.theme.cardBackground};
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;

  div {
    height: fit-content;
    min-height: calc(60vh - 50px);
    width: 100%;
    background: ${(props) => props.theme.filter};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;

const HeroImage = ({ image, heading }) => (
  <StyledHeroImage image={image}>
    <div data-testid="filter">
      <Heading>
        {heading}
      </Heading>
    </div>
  </StyledHeroImage>
);

HeroImage.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default HeroImage;
