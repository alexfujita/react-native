import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        padding: 15,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative',
        flexDirection: 'row',
        marginBottom: 5
    }
})

const CardSection = (props) => {
    return(
        <TouchableOpacity 
            style={styles.container}
            onPress={() => props.navigation.navigate('ActivityPageScreen', {
                vol: props.vol,
                edition: props.edition,
                id: props.id,
                cover: props.cover,
                edition: props.edition,
                image: props.image,
                title: props.title,
                text: props.text,
                topics: props.topics
            })}
        >
            {props.children}
        </TouchableOpacity>
    )
}

export default withNavigation(CardSection);