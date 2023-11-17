import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    main: {
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#fafafa"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingTop: 10,
        paddingRight: 5,
        paddingBottom: 10,
        paddingLeft: 5,
        marginBottom: 20
    },
    text: {
        fontSize: 16,
        lineHeight: 28,
        paddingLeft: 20,
        paddingRight: 20
    },
    textBox: {
        fontSize: 16,
        lineHeight: 28,
        marginTop: 40,
        padding: 20,
        backgroundColor: '#c7d9e8'
    },
    image: {
        height: 300,
        flex: 1,
        width: null
    },
    subtitle: {
        fontSize: 21,
        fontWeight: 'bold',
        paddingTop: 40,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20
    },
    subtext: {
        fontSize: 14,
        lineHeight: 21
    },
    dialogsContainer: {
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
    },
    dialogContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    dialogLabel: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    dialogInoue: {
        backgroundColor: '#DF0101',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dialogOthers: {
        backgroundColor: '#387eaa',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dialogText: {
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 60,
        lineHeight: 18
    },
    boxDotted: {
        padding: 20,
        borderWidth: 4,
        borderStyle: 'dotted',
        borderColor: '#EAF2F8'
    },
    ol: {
        flexDirection: 'row',
    },
    olNr: {
        color: '#4682B4',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24,
        flex: 0.75
    },
    olItem: {
        color: '#4682B4',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24,
        flex: 9.25
    },
    table: {
        flexDirection: 'column',
        flex: 1
    },
    thRow: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        flexWrap: 'wrap'
    },
    thCol: {
        flex: 25,
        alignSelf: 'center',
        textAlign: 'center',
        lineHeight: 18,
        color: '#fff',
        backgroundColor: '#4682B4',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        borderColor: '#fff',
        borderWidth: 1,
        height: 60
    },
    tdRow: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        flexWrap: 'wrap',
    },
    tdCol: {
        flex: 25,
        alignSelf: 'center',
        textAlign: 'center',
        lineHeight: 18,
        backgroundColor: '#c7d9e8',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        borderColor: '#fff',
        borderWidth: 1,
        height: 120
    }
})

class ActivityPage extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('edition'),
            headerStyle: { backgroundColor: '#DF0101' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
        };
    };

    state = { activity: { id: '', vol: '', cover: '', edition: '', image: '', title: '', text: '', topics: [] } };

    componentWillMount() {
        const { navigation } = this.props;
        const vol = navigation.getParam('vol');
        const id = navigation.getParam('id');
        const cover = navigation.getParam('cover');
        const edition = navigation.getParam('edition');
        const image = navigation.getParam('image');
        const title = navigation.getParam('title');
        const text = navigation.getParam('text');
        const topics = navigation.getParam('topics');

        this.setState({ activity: { id, vol, cover, edition, image, title, text, topics } })
    }

    renderTopics() {
        if (this.state.activity.topics) {
            return this.state.activity.topics.map((topic, i) => {
                const textStyle = () => {
                    return topic.title ? styles.text : styles.textBox
                }
                return (
                    <View key={i}>
                        {
                            topic.title &&
                            <Text style={styles.subtitle}>{topic.title}</Text>
                        }
                        {
                            topic.text &&
                            <Text style={textStyle()}>{topic.text}</Text>
                        }
                        {
                            topic.orderedList &&
                            <View style={{padding: 20}}>
                                <View style={styles.boxDotted}>
                                {
                                    topic.orderedList.map((tol, i) => {
                                        i++
                                        return (
                                            <View key={tol} style={styles.ol}>
                                                <Text style={styles.olNr}>{i}</Text>
                                                <Text style={styles.olItem}>{tol}</Text>
                                            </View>
                                            
                                        )
                                    })
                                }
                            </View>
                            </View>
                        }
                        {
                            topic.dialogs &&
                            topic.dialogs.map(dialog => {
                                const inoue = dialog.hasOwnProperty("xxx");
                                const kuchou = dialog.hasOwnProperty("xxx");
                                const kyouikuchou = dialog.hasOwnProperty("xxx");
                                const ku = dialog.hasOwnProperty("xxx");
                                return (
                                    <View key={dialog.inoue} style={styles.dialogsContainer}>
                                        { 
                                            inoue && 
                                            <View style={styles.dialogContainer}>
                                                <View style={styles.dialogInoue}>
                                                    <Text style={styles.dialogLabel}>井上</Text>
                                                </View>
                                                <Text style={styles.dialogText}>{dialog.xxx}</Text>
                                            </View>
                                        }
                                        { 
                                            kuchou &&
                                            <View style={styles.dialogContainer}>
                                                <View style={styles.dialogOthers}>
                                                    <Text style={styles.dialogLabel}>xxx</Text>
                                                </View>
                                                <Text style={styles.dialogText}>{dialog.xxx}</Text>
                                            </View>
                                        }
                                        { 
                                            kyouikuchou &&
                                            <View style={styles.dialogContainer}>
                                                <View style={styles.dialogOthers}>
                                                    <Text style={styles.dialogLabel}>xxx</Text>
                                                </View>
                                                <Text style={styles.dialogText}>{dialog.xxx}</Text>
                                            </View>
                                        }
                                        { 
                                            ku &&
                                            <View style={styles.dialogContainer}>
                                                <View style={styles.dialogOthers}>
                                                    <Text style={styles.dialogLabel}>xxx</Text>
                                                </View>
                                                <Text style={styles.dialogText}>{dialog.xxx}</Text>
                                            </View>
                                        }
                                        <Text></Text>
                                    </View>
                                )

                            })
                            
                        }
                        {
                            topic.image &&
                            <View>
                                <Image
                                    source={{ uri: topic.image }}
                                    style={styles.image}
                                    resizeMode={'contain'}
                                />
                            </View>
                        }
                        {
                            topic.table &&
                            <View style={styles.table}>
                                <View style={styles.thRow}>
                                    {
                                        topic.table.th.map((th) => {
                                            return(
                                                <Text key={th} style={styles.thCol}>{th}</Text>
                                            )
                                        })
                                    }
                                </View>
                                {
                                    topic.table.td.map((tdArray, i) => {
                                        return(
                                            <View style={styles.tdRow} key={i}>
                                            {
                                                tdArray.map(td => {
                                                    return(
                                                        <Text style={styles.tdCol} key={td}>{td}</Text>
                                                    )
                                                })
                                            }
                                            </View>
                                        )

                                    })                                        
                                    
                                }
                            </View>
                        }
                    </View>
                )
            });
        }
    }

    render() {
        const { title, text, image } = this.state.activity;
        return (
            <SafeAreaView style={{flex: 1}}>
                <StatusBar
                    barStyle="light-content"
                />
                <ScrollView style={styles.main}>
                    <Text style={styles.title}>{title}</Text>
                    {
                        text &&
                        <Text style={styles.text}>{text}</Text>
                    }
                    {
                        image &&
                        <View>
                            <Image 
                                source={{ uri: image }}
                                style={styles.image}
                                resizeMode={'contain'}
                            />
                        </View>
                    }
                    { this.renderTopics() }
                </ScrollView>
            </SafeAreaView>
        )
    }
    
}

export default ActivityPage;