import { combineReducers } from 'redux';
import blocks from './blocks/reducers';
import common from './common/reducers';

export default combineReducers({ blocks, common });
