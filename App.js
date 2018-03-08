import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import NavigatorService from './Navigator';
import reducers from './src/reducers/index';


class App extends Component {

  componentWillMount() {
    //Conexao com Firebase antes de montar o app
    let config = {
      apiKey: "AIzaSyAzplfde0zA05_H5BGSl1tLPqOzlMM2Gao",
      authDomain: "whisper7716.firebaseapp.com",
      databaseURL: "https://whisper7716.firebaseio.com",
      projectId: "whisper7716",
      storageBucket: "whisper7716.appspot.com",
      messagingSenderId: "797664639649"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes ref={navigatorRef => {NavigatorService.setContainer(navigatorRef);}} />
      </Provider>
    );
  }
}

export default App;
