import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LoaderComponent } from '../.';

const App = () => {
  return (
    <div>
      <LoaderComponent loading={true} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
