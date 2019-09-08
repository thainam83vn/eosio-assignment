import * as types from './../action-types';
beforeEach(() => {});
afterEach(() => {});

describe('store > blocks > action-types', () => {
  it('Test type constants', () => {
    expect(types.LOADING).toBeDefined();
    expect(types.SET_BLOCKS).toBeDefined();
    expect(types.SELECT_BLOCK).toBeDefined();
    expect(types.SET_ACCOUNT).toBeDefined();
    expect(types.GET_INFO_REQUEST).toBeDefined();
    expect(types.LOAD_BLOCKS_REQUEST).toBeDefined();
    expect(types.SELECT_ACCOUNT_REQUEST).toBeDefined();
    expect(types.SELECT_ACCOUNT_SUCCESS).toBeDefined();
    expect(types.CLEAR_ACCOUNT).toBeDefined();
  });
});
