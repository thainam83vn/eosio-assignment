import { call, put, takeLatest, select } from 'redux-saga/effects';
import _ from 'lodash';
import { eosioService } from './../../services';
import * as types from './action-types';
import * as common from './common';
import * as selectors from './selectors';

function* loadBlocksWorker() {
  yield put({ type: types.LOADING, payload: true });

  const data = yield select(selectors.blocks);
  const blocks = _.get(data, 'blocks') || [];
  const pageSize = _.get(data, 'pageSize') || 1;

  let oldestBlockId =
    blocks.length > 0 ? _.get(blocks[blocks.length - 1], 'previous') : null;
  if (!oldestBlockId) {
    const resGetInfo = yield call(...eosioService.getInfo());
    oldestBlockId = _.get(resGetInfo, 'data.last_irreversible_block_id');
  }
  for (let i = 0; i < pageSize; i++) {
    const resGetBlocks = yield call(...eosioService.loadBlocks(oldestBlockId));
    const block = _.get(resGetBlocks, 'data');
    if (block) {
      oldestBlockId = block.previous;
      common.countActions(block);
      common.getAccounts(block);
      blocks.push(block);
    } else {
      break;
    }
  }

  yield put({
    type: types.SET_BLOCKS,
    payload: [...blocks]
  });
  yield put({ type: types.LOADING, payload: false });
}

function* loadBlocksWatcher() {
  yield takeLatest(types.LOAD_BLOCKS_REQUEST, loadBlocksWorker);
}

function* selectAccountWorker({ type, payload }) {
  const resGetAbi = yield call(...eosioService.getAbi(payload));
  const data = _.get(resGetAbi, 'data');
  yield put({ type: types.SET_ACCOUNT, payload });
  yield put({ type: types.SELECT_ACCOUNT_SUCCESS, payload: data });
}

function* selectAccountWatcher() {
  yield takeLatest(types.SELECT_ACCOUNT_REQUEST, selectAccountWorker);
}

let watchers = [loadBlocksWatcher, selectAccountWatcher];
watchers.loadBlocksWorker = loadBlocksWorker;
watchers.selectAccountWorker = selectAccountWorker;
export default watchers;
