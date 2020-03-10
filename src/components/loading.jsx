import React from 'react';
import {
  Loader,
  Image,
} from 'react-bulma-components/full';

const Loading = () => (
  <React.Fragment>
    <Image src="src/assets/undraw_synchronize_ccxk.svg" />
    <Loader />
  </React.Fragment>
);

export default Loading;
