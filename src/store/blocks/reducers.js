import * as types from './action-types';

const INIT_STATE = {
  blocks: [],
  selectedBlock: null,
  loading: false,
  pageSize: 10
};

export default function(state = INIT_STATE, { type, payload }) {
  switch (type) {
    case types.LOADING:
      return { ...state, loading: payload };
    case types.SET_BLOCKS:
      return { ...state, blocks: payload };
    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlockId: state.selectedBlockId !== payload ? payload : null
      };
    case types.SELECT_ACCOUNT_SUCCESS:
      return { ...state, selectedContracts: payload };
    case types.SET_ACCOUNT:
      return { ...state, selectedAccount: payload };
    case types.CLEAR_ACCOUNT:
      return { ...state, selectedAccount: null, selectedContracts: null };
    default:
      return state;
  }
}
