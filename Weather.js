import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { Ionicons  } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Clear: {
    iconName: "sunny",
    gradient : ["#6DD5FA","#2980B9"],
    title : "Clear",
    subtitle: "Sky is really Clear! You should go out and get tanned!",
  }, 
  Thunderstorm : {
    iconsName: "thunderstorm-outline",
    gradient : ["#00416A","#E4E5E6"],
    title : "Thunderstorm",
    subtitle: "It's dangerous outside. What about watch Netflix and chill",
  },
  Rain : {
    iconsName: "rainy-outline",
    gradient : ["#bdc3c7","#2c3e50"],
    title : "Rain",
    subtitle: "Before you go out, don't forget to bring an umbrella with you!",
  },
  Snow : {
    iconsName: "snow-outline",
    gradient : ["#E0EAFC","#CFDEF3"],
    title : "Snow",
    subtitle: "Elsa is around you! Do you wanna build a snowman?",
  },
  Clouds : {
    iconsName: "cloudy-outline",
    gradient : ["#eef2f3","#8e9eab"],
    title : "Clouds",
    subtitle: "Sky is cloudy. Let's find some funny shaped clouds",
  },
}


export default function Weather({temp, condition}) {
  return (
      <LinearGradient style={styles.container}
        colors={weatherOptions[condition].gradient}
      >
        <StatusBar barStyle="light-content"/>
        <View style={styles.halfContainer}>
          <Ionicons size={96} name={weatherOptions[condition].iconName} color="white"></Ionicons>
          <Text style={styles.temp}>{ temp }º</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
      </LinearGradient>
  );
}


Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  conditions : PropTypes.oneOf([
    "Thunderstorm", 
    "Rain", 
    "Snow", 
    "Clear", 
    "Clouds",
    // "Mist",
    // "Smoke",
    // "Haze",
    // "Dust",
    // "Fog",
    // "Ash",
    // "Sand",
    // "Squall",
    // "Tornado",
    // "Drizzle", 
  ]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent : "center",
    alignItems: "center",
  },
  temp: {
    fontSize:35,
    color: "white",
  },
  halfContainer: {
    flex:1,
    justifyContent:"center",
    alignItems :"center",
  },
  title: {
    color:"white",
    fontSize:40,
    fontWeight:"300",
    marginBottom : 10
  }, 
  subtitle: {
    color:"white",
    fontSize:20,
    fontWeight:"600",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems:"flex-start"
  }
})