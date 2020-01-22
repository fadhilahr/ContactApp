import React, { Component } from 'react';
import { store } from './android/app/src/utils/store'
import { Provider } from 'redux-saga';
import { HomeScreen } from './android/app/src/screens/home/index'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ContactScreen } from './android/app/src/screens/contact'


const HomeNavigator = createDrawerNavigator({

  Home: { screen: HomeScreen },
  Contact: { screen: ContactScreen },

}, {
  initialRouteName: "Home",
  contentComponent: props => <CustomDrawer{...props} />
});


const Navigator = createStackNavigator({
  HomeNavigator
}, {
  initialRouteName: 'HomeNavigator'

})



const AppContainer = createAppContainer(Navigator);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}