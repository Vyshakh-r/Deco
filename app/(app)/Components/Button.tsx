import { View, Text,TouchableOpacity,StyleSheet, } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';






export default function Button() {
      
        const checkLoginStatus = async () => {
          const storedUser = await AsyncStorage.getItem('userData');
          if (storedUser) {
            router.replace('/(tabs)/Homescreen');
          } else {
            router.replace('/Signin'); // or stay on onboarding/login
          }
        };
      
    
  return (
    
      
        <TouchableOpacity style={styles.Button} onPress={checkLoginStatus}>
            <BlurView intensity={50} tint="light" style={styles.blur} />
            <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
    
    
  );
}
const styles = StyleSheet.create({
    Button:{
        borderColor: 'rgba(208, 208, 208, 0.3)',
        paddingVertical: 14,
        paddingHorizontal: 22,
        borderRadius:30,
        width:160,
        alignSelf:'center',
        marginBottom:80,
        alignItems:'center',
        overflow:'hidden',
        position:'relative'
       
        
    },
    buttonText:{
        fontFamily:'Poppins',
        fontSize:16,
        fontWeight:700,
        letterSpacing:0.6,
        color:'rgba(255, 255, 255, 0.94)',
        
    },
    blur: {
        ...StyleSheet.absoluteFillObject, // fills the parent
        borderRadius: 30, // 🎯 match parent border radius
      },
  
    
})