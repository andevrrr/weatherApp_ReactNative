import React from 'react';
import { StyleSheet, View } from 'react-native';
import WeatherScreen from './Components/WeatherScreen';

const App = () => {
    return (
        <View style={styles.container}>
            <WeatherScreen />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default App;