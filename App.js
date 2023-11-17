import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import ActivityList from './src/components/ActivityList';
import ActivityPage from './src/components/ActivityPage';
import ProfilePage from './src/components/ProfilePage';
import { SimpleLineIcons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    ActivityPageScreen: { screen: ActivityPage },
    ActivityListScreen: { screen: ActivityList }
  },
  {
    initialRouteName: "ActivityListScreen"
  }
);

const AppContainer = createAppContainer(createBottomTabNavigator(
  {
    会派報一覧: AppNavigator,
    プロフィール: { 
      screen: createStackNavigator({  
        ProfilePageScreen: ProfilePage
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = SimpleLineIcons;
        let iconName;
        if (routeName === '会派報一覧') {
          iconName = `list`;
        } else if ( routeName === 'プロフィール') {
          iconName= `user-female`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#73add1',
      style: {
        backgroundColor: '#387eaa',
        paddingTop: 5
      }
    },
  }
));

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}