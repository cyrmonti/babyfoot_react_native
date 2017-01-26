import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import Router from './Router';

class App extends  React.Component {
  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
      <Router />
      </Provider>
  );
  }
}

export default App;