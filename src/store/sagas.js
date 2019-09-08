import { all } from 'redux-saga/effects';
import blocks from './blocks/saga';

export default function*() {
  const functions = [...blocks];
  yield all(functions.map(f => f()));
}
