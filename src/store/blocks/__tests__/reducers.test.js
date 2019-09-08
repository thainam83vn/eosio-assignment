import reducers from '../reducers';
import * as types from '../action-types';

let initState = {};

describe('store > blocks > reducers', () => {
  it('Test LOADING', () => {
    expect(reducers(initState, { type: types.LOADING, payload: true })).toEqual(
      {
        ...initState,
        loading: true
      }
    );
  });

  it('Test SET_BLOCKS', () => {
    expect(
      reducers(initState, { type: types.SET_BLOCKS, payload: [1, 2, 3] })
    ).toEqual({
      ...initState,
      blocks: [1, 2, 3]
    });
  });

  it('Test SELECT_BLOCK', () => {
    expect(
      reducers(initState, { type: types.SELECT_BLOCK, payload: 1 })
    ).toEqual({
      ...initState,
      selectedBlockId: 1
    });
  });

  it('Test SELECT_ACCOUNT_SUCCESS', () => {
    expect(
      reducers(initState, {
        type: types.SELECT_ACCOUNT_SUCCESS,
        payload: [1, 2, 3]
      })
    ).toEqual({
      ...initState,
      selectedContracts: [1, 2, 3]
    });
  });

  it('Test SET_ACCOUNT', () => {
    expect(
      reducers(initState, { type: types.SET_ACCOUNT, payload: 1 })
    ).toEqual({
      ...initState,
      selectedAccount: 1
    });
  });

  it('Test CLEAR_ACCOUNT', () => {
    expect(reducers(initState, { type: types.CLEAR_ACCOUNT })).toEqual({
      ...initState,
      selectedAccount: null,
      selectedContracts: null
    });
  });
});
