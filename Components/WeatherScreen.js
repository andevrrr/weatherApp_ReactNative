// WeatherScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Header from './Header';

const WeatherScreen = () => {
    const [location, setLocation] = useState('New York');
    const [weatherData, setWeatherData] = useState({});

    const fetchWeatherData = () => {
        // Fetch weather data from an API
    };

    return (
        <View style={styles.container}>
            <Header location={location} />
            <TextInput
                style={styles.input}
                onChangeText={setLocation}
                value={location}
            />
            <Button title="Refresh" onPress={fetchWeatherData} />
        </View>
    );
};

export default WeatherScreen;
