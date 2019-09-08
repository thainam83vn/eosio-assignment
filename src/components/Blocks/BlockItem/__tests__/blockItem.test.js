import React from 'react';
import { mount } from 'enzyme';
import BlockItem from '../BlockItem';

let wrapped;
let block = {
  id: '1'
};
beforeEach(() => {
  wrapped = mount(<BlockItem block={block} />);
});
afterEach(() => wrapped.unmount());

describe('common-components > BlockItem', () => {
  it('Test component not undefined', () => {
    expect(!!wrapped).toEqual(true);
  });
  it('Test block item header', () => {
    expect(wrapped.find('.block-item>.block-item-header').length).toEqual(1);
  });
  it('Test block item content', () => {
    expect(wrapped.find('.block-item>.block-item-content').length).toEqual(1);
  });
});
