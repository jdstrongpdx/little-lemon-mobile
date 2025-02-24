import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput, Alert, Pressable
} from "react-native";
import {validateEmail} from "../utils";

const SubscribeScreen = ({navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handlePress = () => {
    setDisabled(true);
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      setDisabled(false);
    }
    else {
      Alert.alert('Thanks for subscribing, stay tuned!');
    }
  };

  const handleEmailChange = (value) => {
    onChangeEmail(value);
    setDisabled(value.trim().length === 0);
  };

  return (
      <>
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/little-lemon-logo-grey.png')}
                resizeMode="contain"
                accessible={true}
                accessibilityLabel={'Little Lemon Logo'}
            />
            <Text style={styles.text}>
              Subscribe to our newsletter for our latest delicious recipes!
            </Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={handleEmailChange}
                placeholder={'Hello@example.com'}
                keyboardType={'email-address'}
            />

            <Pressable
                onPress={() => handlePress()}
                style={[styles.buttonWrapper, disabled && styles.disabled]}
                disabled={disabled}
            >
              <Text style={styles.buttonText}>Subscribe</Text>
            </Pressable>

          </ScrollView>
        </KeyboardAvoidingView>
      </>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
    marginTop: 50,
  },
  container: {
    flex: 1,
  },
  text: {
    marginTop: 40,
    padding: 20,
    color: '#333333',
    textAlign: 'center',
    fontSize: 16,
  },
  input: {
    height: 40,
    margin: 30,
    paddingLeft: 5,
    borderWidth: 2,
    fontSize: 16,
    borderColor: '#333333',
    borderRadius: 5,
  },
  buttonWrapper: {
    height: 35,
    width: 300,
    borderRadius: 8,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    alignSelf: 'center',
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

