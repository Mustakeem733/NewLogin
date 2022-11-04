import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ThirdScreen = () => {
  

  return (
    <View style={styles.conatiner}>
        <View style={styles.conatiner4}> 
        <Text style={styles.text}>Wuugs</Text>

        </View>

        <View style={styles.conatiner1}>
       <FontAwesome5 name={'user'} size={30} />
        </View>
        <View style={styles.container2}>
            <Text style={styles.text2}>My Reward</Text>
        </View>
        <View style={styles.container3}>
            <Text style={styles.text2}>0</Text>
        </View>
        <Text>Recent Onboarded Merchants</Text>

        <Text>Recent Transaction</Text>
       
    
    </View>
    
  )
}



const styles= StyleSheet.create({
    conatiner:{
        backgroundColor:'yellow',
        justifyContent:'center',
        height:45,
        top:0,
        

    },
    conatiner1:{
        paddingLeft:5,
        //Top:-10,
        top:20,


    },
    container2:{  
        top:-18,
        left:320,  
    },
    container3:{
        top:-20,
        left:350,
    },
    conatiner4:{
        top:40,
    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:24,
        color:'black',
        top:8,

    },
    text2:{
        fontWeight:'bold'
    },
    icon:{
        marginVertical:80,
        justifyContent:'center',

    }
})

export default ThirdScreen