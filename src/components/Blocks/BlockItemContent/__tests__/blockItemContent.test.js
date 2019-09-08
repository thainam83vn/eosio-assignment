import React from 'react';
import { mount } from 'enzyme';
import BlockItemContent from '../BlockItemContent';

let wrapped;
let block = {
  id: '1'
};
beforeEach(() => {
  wrapped = mount(<BlockItemContent block={block} />);
});
afterEach(() => wrapped.unmount());

describe('common-components > BlockItemContent', () => {
  it('Test component not undefined', () => {
    expect(!!wrapped).toEqual(true);
    expect(wrapped.find('.block-item-content').length).toEqual(1);
  });
  it('Test tab links', () => {
    expect(
      wrapped.find('.block-item-content .block-item-content-tab-link').length
    ).toBeGreaterThan(2);
  });
  it('Test tabs', () => {
    expect(
      wrapped.find('.block-item-content .block-item-content-view').length
    ).toBeGreaterThan(2);
  });
});
