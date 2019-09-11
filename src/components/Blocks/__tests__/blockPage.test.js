import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../../../root';
import BlockPage from '../BlocksPage';

const initialStore = {
  blocks: {
    blocks: [
      { id: '1', action: 1, timestamp: '1/1/1' },
      { id: '2', action: 1, timestamp: '1/1/1' }
    ],
    pageSize: 1
  }
};
let wrapped;
beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://api.eosnewyork.io/v1/chain/get_info', {
    status: 200,
    response: {
      last_irreversible_block_id: '1'
    }
  });
  moxios.stubRequest('https://api.eosnewyork.io/v1/chain/get_block', {
    status: 200,
    response: {
      id: Math.floor(Math.random() * Math.floor(1000)) + 2,
      previous: '0',
      transactions: []
    }
  });

  wrapped = mount(
    <Root initialStore={initialStore}>
      <BlockPage />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
  moxios.uninstall();
});

describe('components > Blocks > BlockPage', () => {
  it('Test not undefined', () => {
    expect(wrapped.find('.block-page').length).toEqual(1);
  });

  it('Test number block items', () => {
    expect(wrapped.find('.block-item').length).toEqual(2);
  });

  it('Test hit button Show more', done => {
    expect(wrapped.find('.block-page-buttons button').length).toEqual(1);
    const button = wrapped.find('.block-page-buttons button').first();
    button.simulate('click');

    moxios.wait(() => {
      wrapped.update();
      expect(wrapped.find('.block-item').length).toEqual(3);
      done();
    });
  });
});
