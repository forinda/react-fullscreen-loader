import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LoaderComponent } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoaderComponent loading />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
