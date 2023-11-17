import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, Dimensions } from 'react-native';

class ProfilePage extends Component {

    static navigationOptions = {
        title: 'xxx',
        headerStyle: { backgroundColor: '#DF0101' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
    };

    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <StatusBar barStyle="light-content" />
                <ScrollView style={styles.main}>
                    <View style={styles.profileBox}>
                        <Text style={styles.featureText}>xxx</Text>
                        <View style={styles.list}>
                            <Text style={styles.bullet}>●</Text>
                            <Text style={styles.item}>xxx</Text>
                        </View>
                        <View style={styles.list}>
                            <Text style={styles.bullet}>●</Text>
                            <Text style={styles.item}>xxx</Text>
                        </View>
                        <View style={styles.list}>
                            <Text style={styles.bullet}>●</Text>
                            <Text style={styles.item}>xxx</Text>
                        </View>
                        <View style={styles.list}>
                            <Text style={styles.bullet}>●</Text>
                            <Text style={styles.item}>xxx</Text>
                        </View>
                    </View>
                    <View>
                        <Image 
                            source={{ uri: 'http://www.xxx.com/img/profile_app.jpg' }}
                            style={styles.image}
                            resizeMode={'contain'}
                        />
                    </View>
                    <Text style={styles.profileText}>
                    xxx
                    </Text>
                    <View style={styles.credits}>
                        <Text>ホームページ</Text>
                        <Text style={styles.arrow}>▶︎</Text>
                        <Text style={styles.featureText}>xxx.com</Text>
                    </View>
                    <View style={styles.credits}>
                        <Text>ブログ</Text>
                        <Text style={styles.arrow}>▶︎</Text>
                        <Text style={styles.featureText}>xxx/xxx</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        ) 
    }
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    main: {
        width: width,
        marginBottom: 30
    },
    list: {
        flexDirection: 'row'
    },
    item: {
        fontSize: 14,
        marginBottom: 10
    },
    bullet: {
        color: '#DF0101',
        marginRight: 10
    },
    profileBox: {
        backgroundColor: '#f8cccc',
        padding: 20
    },
    arrow: {
        color: '#DF0101',
        marginLeft: 5,
        marginRight: 5
    },
    featureText: {
        fontWeight: 'bold',
        fontSize: 18    
    },
    profileText: {
        fontSize: 16,
        lineHeight: 28,
        marginTop: 20,
        padding: 20
    },
    image: {
        flex: 1,
        width: width,
        height: 365
    },
    credits: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10
    }
})

export default ProfilePage;