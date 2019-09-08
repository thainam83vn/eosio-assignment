import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import SpinningButton from '../SpinningButton';

let wrapped;
beforeEach(() => {
  wrapped = mount(<SpinningButton />);
});
afterEach(() => wrapped.unmount());

describe('common-components > SpinningButton', () => {
  it('Test component not undefined', () => {
    expect(!!wrapped).toEqual(true);
  });
});
