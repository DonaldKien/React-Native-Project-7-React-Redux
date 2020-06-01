import React from 'react';
import Home from './components/home';
import store1 from './store/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store1}>
      <Home/>  
    </Provider>

  );
}