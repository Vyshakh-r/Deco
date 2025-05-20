import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

export default function FollowButton() {
  return (
    <TouchableOpacity style={styles.Container}>
        <Text style={styles.Text}>Follow</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    Container:{
        paddingHorizontal:10,
        paddingTop:5,
        paddingBottom:6,
        backgroundColor:'#FFFFFF',
        borderRadius:30,
        borderColor:'#5151C6',
        borderWidth:1,
        width:64,
        height:32
    },
    Text:{
        fontFamily:'Poppins',
        fontWeight:500,
        fontSize:14,
        color:'#5151C6'
    }
})