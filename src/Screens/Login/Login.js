import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo.jpg';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import SecondScreen from '../SecondScreen';

const Login = () => {
    const{fullName, setFullName}=useState('');
    const{mobileNumber, setMobileNumber}=useState('');
    const {userName, setUserName}=useState('')

    const navigation = useNavigation();
    const onSignUpPressed = () => {
        console.warn("Sign Up");
        navigation.navigate('SecondScreen');
    }

    
  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.text3}> Sign Up </Text>

      <Text style={styles.text}> Full Name </Text>
 
      <CustomInput
        placeholder="Full Name"
        value={fullName}
        setValue={setFullName}
      />
      <Text style={styles.text2}> Mobile number </Text>
      <CustomInput
        placeholder="Mobile number"
        value={mobileNumber}
        setValue={setMobileNumber}
      />
      
      
      <CustomButton text="Sign Up" onPress={onSignUpPressed} />
    </View>

    
  );
};

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
    },
    root: {
        alignItems: 'center',
        padding: 70,
    },
    text:{
      left:-90,
      top:20,
    },
    text2:{
      left:-75

    },
    text3:{
      fontWeight:'bold',
      fontSize:25,
    },
    
  
});
export default Login;