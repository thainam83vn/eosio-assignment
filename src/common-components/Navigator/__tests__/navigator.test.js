import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Navigator from '../Navigator';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  );
});
afterEach(() => wrapped.unmount());

describe('common-components > Navigator', () => {
  it('Test navigator not undefined', () => {
    expect(!!wrapped).toEqual(true);
  });
  it('Test navigator content', () => {
    const result = wrapped.find('.navigator>.navigator-link');
    expect(result.length).toEqual(2);
  });
});
