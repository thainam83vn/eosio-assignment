import axios from 'axios';
const BASE_URL = 'https://api.eosnewyork.io/v1';
const PROXY_URL = 'http://localhost:5000';

export default {
  getInfo: () => [axios.get, `${BASE_URL}/chain/get_info`],
  loadBlocks: blockId => [
    axios.post,
    `${BASE_URL}/chain/get_block`,
    { block_num_or_id: blockId }
  ],
  getAbi: account_name => [
    axios.post,
    `${PROXY_URL}/get_abi`,
    { account_name: account_name }
  ]
};
