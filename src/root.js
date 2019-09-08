// import React from 'react';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import createSagaMiddle from 'redux-saga';
// import sagas from './sagas';
// import reducers from './reducers';

// export default function({ children, initStore }) {
//   const sagaMiddle = createSagaMiddle();
//   const store = createStore(reducers, initStore, applyMiddleware(sagaMiddle));
//   sagaMiddle.run(sagas);

//   return <Provider store={store}>{children}</Provider>;
// }

import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';

export default function({ children, initialStore }) {
  return <Provider store={createStore(initialStore)}>{children}</Provider>;
}
