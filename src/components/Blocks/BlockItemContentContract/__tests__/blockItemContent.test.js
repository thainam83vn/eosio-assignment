import React from 'react';
import { mount } from 'enzyme';
import BlockItemContentContracts from '../BlockItemContentContracts';
import Root from './../../../../root';

let wrapped;
let initialStore = {
  blocks: {
    blocks: [
      {
        id: '1',
        accounts: {
          u1: [
            {
              name: 'eosio.token',
              ricardian_contract: 'ricardian_contract'
            }
          ],
          u2: [
            {
              name: 'eosio.null',
              ricardian_contract: 'ricardian_contract'
            }
          ]
        }
      }
    ],
    selectedBlockId: '1'
  }
};
beforeEach(() => {
  wrapped = mount(
    <Root initialStore={initialStore}>
      <BlockItemContentContracts />
    </Root>
  );
});
afterEach(() => wrapped.unmount());

describe('common-components > BlockItemContent', () => {
  it('Test component not undefined', () => {
    expect(!!wrapped).toEqual(true);
    expect(wrapped.find('.block-item-content-contracts').length).toEqual(1);
  });

  it('Test accounts', () => {
    expect(
      wrapped.find(
        '.block-item-content-contracts .block-item-content-contracts-account'
      ).length
    ).toBeGreaterThan(0);
  });
});
