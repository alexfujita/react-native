import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Dimensions, ScrollView, StatusBar } from 'react-native';
import firebase from 'firebase';
import ActivityDetail from './ActivityDetail';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    main: {
        width: width,
        backgroundColor: '#ddd'
    }
})

class ActivityList extends Component {

    static navigationOptions = {
        title: 'xxx',
        headerStyle: { backgroundColor: '#DF0101' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
    };
    
    state = { activities: [] };

    componentWillMount() {

        firebase.initializeApp({
            apiKey: "xxxx",
            authDomain: "xxx.firebaseapp.com",
            projectId: "xxx",
            databaseURL: "https://xxx.firebaseio.com",
            storageBucket: "xxx.appspot.com",
            messagingSenderId: "xxxx"
        });

        firebase.database().ref().once('value')
        .then((snapshot) => {
            this.setState({
                activities: snapshot.val()
            })
        })


    }

    renderActivities() {
        return this.state.activities.filter((activity) => activity.active === true).reverse().map(activity => 
            <ActivityDetail key={activity.title} activity={activity} />
        );
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <StatusBar barStyle="light-content" />
                <ScrollView style={styles.main}>
                    {this.renderActivities()}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default ActivityList;