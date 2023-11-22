// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ location }) => (
    <View>
        <Text>{location}</Text>
    </View>
);

export default Header;
