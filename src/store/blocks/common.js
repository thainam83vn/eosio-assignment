import _ from 'lodash';

export function countActions(block) {
  const transactions = block.transactions;
  block.totalActions = transactions.reduce(
    (count, ts) =>
      count +
      (_.get(ts, 'trx.transaction.actions')
        ? _.get(ts, 'trx.transaction.actions').length
        : 0),
    0
  );
}

export function getAccounts(block) {
  const transactions = block.transactions;
  block.accounts = transactions.reduce((accounts, ts) => {
    const actions = _.get(ts, 'trx.transaction.actions') || [];
    actions.forEach(action => {
      if (!accounts[action.account]) {
        accounts[action.account] = [];
      }
      accounts[action.account].push(action);
    });
    return accounts;
  }, {});
}
