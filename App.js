// import React, { Component } from 'react';
import { AppRegistry, View, AsyncStorage, Text } from 'react-native';
// import { createStore, compose } from 'redux';
// import { Provider } from 'react-redux';

// import thunk from 'redux-thunk';
// Import the reducer and create a store


// Add the autoRehydrate middleware to your redux store 
// const store = compose(autoRehydrate())(createStore)(reducer)
// const store = createStore(reducer, undefined, autoRehydrate())//
// const store = createStore(reducer, applyMiddleware(thunk))
// Enable persistence
// persistStore(store, { storage: AsyncStorage })

// Import the App container component
import App from './app/index'

/*const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('OneAskIU', () => AppWithStore)*/
import { persistStore, autoRehydrate } from 'redux-persist';
import React, { Component } from 'react';
// import { AppRegistry } from 'react-native';
// persistStore(store, { storage: AsyncStorage })
// import App from './app';
// import { reducer } from './app/redux/storageRedux'

import { reducer } from './app/actions/introAction'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// const store = createStore(reducer, applyMiddleware(thunk))
const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
)

// persistStore(store);
/*const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)*/
export default class AppWithStore extends Component {
  constructor() {
    super()
    this.state = { rehydrated: false }
  }

  // componentWillMount() {
  //   persistStore(store, {}, () => {
  //     this.setState({ rehydrated: true })
  //   });
  //   console.log('In componentWillMount:', this.state.rehydrated);
  //   console.log('after persister store.getState():', store.getState());
  // }
  componentWillMount() {
    console.log('componentWillMount', this.state.rehydrated)
    persistStore(store, { storage: AsyncStorage });
    this.setState({ rehydrated: true });
  }
  render() {
    console.log(this.state.rehydrated)
    if (!this.state.rehydrated)
      return <View />
    else
      return <Provider store={store}>
        <App />
      </Provider>

  }
}
AppRegistry.registerComponent('OneAskIU', () => AppWithStore);
