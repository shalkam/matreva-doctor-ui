import Loadable from 'react-loadable';
import React from 'react';
import Loading from './loading';

const loadable = (loader, render) => {
  if (!render)
    // eslint-disable-next-line
    render = (loaded, props) => {
      const Component = loaded.default;
      return <Component {...props} />;
    };
  return Loadable({
    loader: () => loader,
    render,
    loading: Loading,
    delay: 300,
    timeout: 10000
  });
};
export default loadable;
