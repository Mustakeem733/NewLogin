import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder}) => {
  return (
    <View style = {styles.conatiner}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      style={styles.input}
      placeholder={placeholder}
       />
    </View>
  );
};

const styles = StyleSheet.create({
    conatiner: {
        borderStartColor: 'white',
        width: '100%',
        borderColor:'#e8e8e8',
        borderWidth: 5,
        borderRadius: 5,
        paddingHorizontal:10,
        marginVertical:20,
        // borderBottomWidth:StyleSheet.hairlineWidth,
        // borderColor:'black',
        // right:90,
        // textDecorationStyle:'solid',
    },
    input: {

    },
})

export default CustomInput