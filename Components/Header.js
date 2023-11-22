import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ location }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{location}</Text>
        <View style={styles.underline}></View>
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    headerText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
    underline: {
        backgroundColor: 'black',
        height: 2,
        width: 300,
        marginTop: 5,
    },
});

export default Header;
