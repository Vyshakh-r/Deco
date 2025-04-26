import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, Platform, StatusBar, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';  // Importing the useRouter hook for navigation
import AsyncStorage from '@react-native-async-storage/async-storage';


const LandingPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/Onbording');  // Use router.replace to navigate to the onboarding screen
    }, 3000);  // Navigate after 3 seconds

    return () => clearTimeout(timer);  // Clean up the timeout
  }, []);

  const screenHeight = Dimensions.get('window').height + (Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0);
  return (
    <ImageBackground
      source={require('../assets/images/splash.jpg')}
      style={[styles.background, { height: screenHeight }]}
      resizeMode="cover"
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Image source={require('../assets/images/splash-image.png')} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    color: 'black',
    fontSize: 22,
  },
  background:{
    backgroundSize:'cover',
    flex:1,
    opacity:0.9
    


  },
  safeArea: {
    flex:1,
    // Add padding if needed for content
    padding:50
  }
});
export default LandingPage;