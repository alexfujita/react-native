import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0,
        elevation: 1,
        marginTop: 0,
    }
})

export default Card;