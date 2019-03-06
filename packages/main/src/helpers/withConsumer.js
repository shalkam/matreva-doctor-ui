import React from 'react';
// import { Consumer } from 'pages/creators/FilterContext';

const withConsumer = Consumer => Component => baseProps => (
	<Consumer>{context => <Component {...baseProps} {...context} />}</Consumer>
);

export default withConsumer;
