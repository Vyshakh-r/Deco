import { View, Text, StyleSheet, Platform, StatusBar, Image, ImageBackground, SafeAreaView, } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import SignupForm  from './SignupFom'

export default function Signin() {
  const screenHeight = Dimensions.get('window').height + (Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0);
  return (
    <View style={{ flex: 1 }}>
      {/* Main content container */}
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/camera.png')}
            style={styles.image}
            resizeMode='cover'
          />
          <Image
            source={require('../../assets/images/v9FQR4tbIq8.png')}
            style={styles.image}
            resizeMode='cover'
          />
          
          <Image
            source={require('../../assets/images/MU3SIgq5Gpw.png')}
            style={styles.image}
            resizeMode='cover'
          />
          <Image
            source={require('../../assets/images/g6y5mm9Zby0.png')}
            style={styles.image}
            resizeMode='cover'
          />
        </View>
      </SafeAreaView>

      {/* Overlay image in front */}
      <ImageBackground 
        source={require('../../assets/images/splash.jpg')}
        style={[
          styles.overlay,
          { height: screenHeight }
        ]}
        resizeMode='cover'
      >
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      </ImageBackground>
      <SignupForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    zIndex: 1, // Content sits above normal flow
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    zIndex: 2, // Higher than content
    opacity: 0.6, // Adjust transparency (0.5 = 50% visible)
  },
  safeArea: {
    flex: 1,
    paddingTop: 50,
  },
  image: {
    width: '50%',
  }
})