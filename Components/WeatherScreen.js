import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Header from "./Header";

const WeatherScreen = () => {
  const [location, setLocation] = useState("New York");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchWeatherData() {
    try {
      setLoading(true);
      setError(null);
      const apiKey = "4dd92c06b63e4535bc893519232211";
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
      } else {
        throw new Error(data.error.message || "Failed to fetch weather data");
      }
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const getWeatherEmoji = () => {
    const condition = weatherData?.current?.condition?.text.toLowerCase();
    switch (condition) {
      case "sunny":
        return "☀️";
      case "partly cloudy":
      case "cloudy":
        return "☁️";
      case "rain":
      case "light rain":
      case "heavy rain":
      case "showers":
        return "🌧️";
      case "fog":
      case "mist":
        return "🌫️";
      default:
        return "❓";
    }
  };

  const weatherEmoji = getWeatherEmoji();
  const windSpeed = weatherData?.current?.wind_kph + " kph" || "N/A";
  const temp = weatherData?.current?.temp_c + "°C" || "N/A";

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
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <>
          <Text style={styles.emoji}>{weatherEmoji}</Text>
          <Text style={styles.text}>Temperature: {temp}</Text>
          <Text style={styles.text}>Wind speed: {windSpeed}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  emoji: {
    fontSize: 200,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default WeatherScreen;