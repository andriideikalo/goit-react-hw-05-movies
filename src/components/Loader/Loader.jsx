import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderStyles } from './LoaderStyles';

export const Loader = () => {
  return (
    <LoaderStyles>
      <ThreeDots color="tomato" width={100} height={100} />
    </LoaderStyles>
  );
};

export default Loader;
