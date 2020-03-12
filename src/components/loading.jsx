import React from 'react';
import Loader from 'react-bulma-components/lib/components/loader';
import Image from 'react-bulma-components/lib/components/image';

const Loading = () => (
  <React.Fragment>
    <Image src="src/assets/undraw_synchronize_ccxk.svg" />
    <Loader />
  </React.Fragment>
);

export default Loading;
