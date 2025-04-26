import React from 'react';
import { View, Text, StyleSheet,ImageBackground,SafeAreaView,Platform,StatusBar,Image} from 'react-native';
import { Dimensions } from 'react-native';
import Button from './Components/Button';




export default function Onboarding() {
  const screenHeight = Dimensions.get('window').height + (Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0);
  console.log("LandingPage rendered ✅");
  

  return (
     <ImageBackground 
     source={require('../assets/images/splash.jpg')}
     style={[styles.background,
          { height: screenHeight }
     
     ]}
     resizeMode='cover'
     >
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
     
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/splash-image.png')}
        />
      </View>
      <Text style={styles.onboardText}>SHARE - INSPIRE - CONNECT</Text>
      <Button/>   
      </SafeAreaView>
     </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
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
  },
  onboardText:{
    fontFamily:'Poppins',
    fontSize:14,
    fontWeight:500,
    lineHeight:120,
    letterSpacing:2,
    color: '#FFFFFF',
    margin:0,
    alignSelf:'center',

    },

});
