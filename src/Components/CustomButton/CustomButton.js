import { View, Text, StyleSheet, Pressable, Button } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.input}>Sign Up </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FED000',
        padding: 20,
        marginVertical:5,
        borderRadius:5,
    },
    input: {
        fontWeight:'bold',
        color:'black',

    },
})

export default CustomButton