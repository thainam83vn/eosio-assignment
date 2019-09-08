import * as types from '../action-types';
import * as actions from '../actions';
beforeEach(() => {});
afterEach(() => {});

describe('store > blocks > actions', () => {
  it('Test loadBlocks', () => {
    expect(actions.loadBlocks()).toEqual({ type: types.LOAD_BLOCKS_REQUEST });
  });

  it('Test getInfo', () => {
    expect(actions.getInfo()).toEqual({ type: types.GET_INFO_REQUEST });
  });

  it('Test setBlocks', () => {
    expect(actions.setBlocks([])).toEqual({
      type: types.SET_BLOCKS,
      payload: []
    });
  });

  it('Test selectBlock', () => {
    expect(actions.selectBlock(1)).toEqual({
      type: types.SELECT_BLOCK,
      payload: 1
    });
  });

  it('Test getInfo', () => {
    expect(actions.getInfo()).toEqual({ type: types.GET_INFO_REQUEST });
  });

  it('Test selectAccount', () => {
    const acc = { name: 1 };
    expect(actions.selectAccount(acc)).toEqual({
      type: types.SELECT_ACCOUNT_REQUEST,
      payload: acc
    });
  });

  it('Test clearAccount', () => {
    expect(actions.clearAccount()).toEqual({ type: types.CLEAR_ACCOUNT });
  });
});
