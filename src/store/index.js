import { createStore, applyMiddleware } from 'redux';
import createSagaMiddle from 'redux-saga';
import sagas from './sagas';
import reducers from './reducers';

export default initialStore => {
  const sagaMiddle = createSagaMiddle();
  const store = createStore(
    reducers,
    initialStore,
    applyMiddleware(sagaMiddle)
  );
  sagaMiddle.run(sagas);
  return store;
};
