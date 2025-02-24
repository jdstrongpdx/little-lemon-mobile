import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, Button, Pressable} from "react-native";

const WelcomeScreen = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Subscribe')
  };


  return (
      <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/little-lemon-logo.png')}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />

        <Text style={styles.text}>
          Little Lemon, your local Mediterranean Bistro.
        </Text>

        <Pressable
            onPress={() => handlePress()}
            style={styles.buttonWrapper}
        >
          <Text style={styles.buttonText}>Newsletter</Text>
        </Pressable>

      </View>
      </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  text: {
    marginTop: 40,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    marginTop: 250,
    height: 35,
    width: 300,
    borderRadius: 8,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  }
});

