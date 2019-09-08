import { call, put, takeLatest, select } from 'redux-saga/effects';
import eosioService from '../../../services/eosioService';
import * as types from '../action-types';
import sagas from '../saga';
import * as selectors from '../selectors';

describe('store > blocks > sagas', () => {
  it('Test loadBlocksWorker', () => {
    const iter = sagas.loadBlocksWorker();
    expect(iter.next().value).toEqual(
      put({ type: types.LOADING, payload: true })
    );
    expect(iter.next().value).toEqual(select(selectors.blocks));
    expect(iter.next().value).toEqual(call(...eosioService.getInfo()));
    expect(iter.next().value).toEqual(
      call(...eosioService.loadBlocks(undefined))
    );
    expect(iter.next().value).toEqual(
      put({
        type: types.SET_BLOCKS,
        payload: []
      })
    );
    expect(iter.next().value).toEqual(
      put({ type: types.LOADING, payload: false })
    );
  });

  it('Test selectAccountWorker', () => {
    const payload = 1;
    const iter = sagas.selectAccountWorker({ payload });
    expect(iter.next().value).toEqual(call(...eosioService.getAbi(payload)));
    expect(iter.next().value).toEqual(
      put({ type: types.SET_ACCOUNT, payload })
    );
    expect(iter.next().value).toEqual(
      put({ type: types.SELECT_ACCOUNT_SUCCESS, payload: undefined })
    );
  });
});
