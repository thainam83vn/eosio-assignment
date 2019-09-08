import React from 'react';
import { mount } from 'enzyme';
import Header from '../Header';

let wrapped;
beforeEach(() => {
  wrapped = mount(<Header />);
});
afterEach(() => wrapped.unmount());

describe('common-components > Header', () => {
  it('Test header not undefined', () => {
    expect(!!wrapped).toEqual(true);
  });
  it('Test header content', () => {
    const result = wrapped.find('h1');
    expect(result.length).toEqual(1);
    expect(result.first().text()).toEqual('Block One');
  });
});
