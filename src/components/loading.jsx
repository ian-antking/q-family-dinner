import React from 'react';
import {
  Loader,
  Content,
  Image,
} from 'react-bulma-components/full';

const Loading = () => (
  <Content>
    <Image src="src/assets/undraw_synchronize_ccxk.svg" />
    <Loader />
  </Content>
);

export default Loading;
