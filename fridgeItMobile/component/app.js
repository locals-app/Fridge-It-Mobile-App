import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Route, Link, Redirect } from 'react-router-native';

import HomeView from './Home/homeView.js';
import FixedMenu from './Landing_Page/fixedMenu.js';
import * as authActions from '../actions/authActions.js';



class App extends Component {
	constructor(props) {
		super(props);
	}

	render = () => {
		// when complete change this back
		if(AsyncStorage.getItem('userid') === null) {
      return (
        <View>
        	<HomeView history={this.props.history} />
        </View>
      )
    } else {
      return (
        <View>
          <FixedMenu history={this.props.history} />
        </View>
      );
    }
	}
}

const appState = (store) => {
  return {
    username: store.auth.username,
  }
};

const appDispatch =(dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
};

export default connect(appState, appDispatch)(App);