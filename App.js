import { AppRegistry, View, AsyncStorage } from 'react-native';
import App from './app/index'


import { persistStore, autoRehydrate } from 'redux-persist';
import React, { Component } from 'react';

import { reducer } from './app/actions/introAction';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// const store = createStore(reducer, applyMiddleware(thunk))
const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
)
export default class AppWithStore extends Component {
  constructor() {
    super();
    this.state = { rehydrated: false }
  }
  componentWillMount() {
    persistStore(store, { storage: AsyncStorage }, () => {
      this.setState({ rehydrated: true })
    });
  }

  render() {

    console.log('rehydrated', this.state.rehydrated)
    if (!this.state.rehydrated)
      return <View />
    else
      return <Provider store={store}>
        <App />
      </Provider>

  }
}
AppRegistry.registerComponent('OneAskIU', () => AppWithStore);
