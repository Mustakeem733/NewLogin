import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/logo2.jpg';
import Login from '../Login/Login';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../Navigation';
import ThirdScreen from '../../ThirdScreen/ThirdScreen';
import profile from '../../../assets/images/logo3.png'

const SecondScreen = ({route}) => {
  const navigation = useNavigation();
   const onClickPressed = () => {
       navigation.navigate('ThirdScreen');
   }

  return (
    <View style={styles.container}>
        
        <Image source={Logo} style={styles.logo2} resizeMode="contain" />
        <Image source={profile} style={styles.logo3} resizeMode="contain" />
   
      <View style={styles.container1} >
        <Text style={styles.text1}>Your Available WUUGS Points: 0</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text2}> WELCOME </Text>
        <Text style={styles.text2}> Mr.:  </Text>
        <Text style={styles.text2}> Hope you have / had a Great Day</Text>
      </View>
      <View style={styles.container3}>
        <Text  style={styles.text3}>Kindly create your profile by </Text>
        <Pressable onPress={onClickPressed}>
          <Text style={styles.text4}>Click Here</Text>
        </Pressable>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: 'white',
    fontWeight: '600',
  },
  text2:{
    color: 'black',
    fontWeight:'800',
    textAlign:'center',
    },
  container1: {
    backgroundColor:'black',
    alignItems:'center',
    },
    container2: {
        backgroundColor:'yellow',
        justifyContent:'center',
        marginLeft:80,
        marginRight:80,
        height:100,
        marginVertical:20,
        },
        container3:{
            top:5,
            left:75,
        },
        text3:{
            color:'white',
},
        text4:{
          color:'white',
          left:180,
          top:-18,
          textDecorationLine:'underline',
        },
    logo2: {
        height:50,
        width:70,
        marginRight:250,
    },
    container:{
        backgroundColor:'black',
        flex:1,

    },
    button1:{
      backgroundColor:'white',
      padding:10,
      marginLeft:170,
      marginRight:170,
      textAlign:'center',
    },
    input: {
      fontWeight:'bold',
      color:'black',

  },
  logo3:{
        height:50,
        width:70,
        paddingRight:720,
        top:-45,
  },
})

export default SecondScreen