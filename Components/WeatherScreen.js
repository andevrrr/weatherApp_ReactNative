import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Header from './Header';

const WeatherScreen = () => {
    const [location, setLocation] = useState('New York');
    const [weatherData, setWeatherData] = useState({});

    const fetchWeatherData = () => {
        // Fetch weather data from an API
    };

    const weatherEmojis = ['☀️', '☁️', '🌧️', '🌫️'];
    const windSpeed = '5 m/s';
    const temp = 30;

    return (
        <View style={styles.container}>
            <Header location={location} />
            <TextInput
                style={styles.input}
                onChangeText={setLocation}
                value={location}
                placeholder="Enter Location"
            />
            <Button title="Refresh" onPress={fetchWeatherData} />
            <Text style={styles.emoji}>{weatherEmojis[0]}</Text>
            <Text style={styles.text}>Temperature: {temp}°C</Text>
            <Text style={styles.text}>Wind speed: {windSpeed}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    emoji: {
        fontSize: 200,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default WeatherScreen;
