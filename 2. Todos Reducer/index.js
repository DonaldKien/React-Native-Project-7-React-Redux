import React from 'react';
import Home from './Components/todos';
import {Provider} from 'react-redux'
import store1 from './Store/store'

export default function App() {
  return (
    <Provider store={store1}>
        <Home/>
    </Provider>

  );
}
