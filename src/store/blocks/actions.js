import * as types from './action-types';

export const loadBlocks = () => ({ type: types.LOAD_BLOCKS_REQUEST });
export const getInfo = () => ({ type: types.GET_INFO_REQUEST });
export const setBlocks = blocks => ({
  type: types.SET_BLOCKS,
  payload: blocks
});
export const selectBlock = blockId => ({
  type: types.SELECT_BLOCK,
  payload: blockId
});
export const selectAccount = account => ({
  type: types.SELECT_ACCOUNT_REQUEST,
  payload: account
});
export const clearAccount = () => ({
  type: types.CLEAR_ACCOUNT
});
