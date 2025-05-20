import { View, Text,SafeAreaView,ScrollView,StyleSheet, ImageBackground, TouchableOpacity,StatusBar,Image, Settings, TextInput } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import BackIcon from '../../../assets/images/icons/back icon.svg';
import { LinearGradient } from 'expo-linear-gradient';





export default function profile() {

  const router = useRouter();
  return (
    <ScrollView style={styles.Container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.headerContainer}>
        <ImageBackground
             source={require('../../../assets/images/splash.jpg')}
              style={styles.headerBackground}
           imageStyle={styles.headerImage}
             >
          <View style={styles.headerContent}>
          <TouchableOpacity style ={styles.Settings} onPress={()=> router.back()}>
               <BackIcon/> 
            </TouchableOpacity>
             <Text style={styles.username}>Edit profile</Text>
          </View>
       </ImageBackground>
      <View style={styles.profileWrapper}>
        <Image
        source={require('../../../assets/images/userImagebig.png')}
        style={styles.profileImage}
         />
       </View>
  </View>
  <View style={styles.inputContainer}>
    <View style={styles.NameInput}>
        <Text style={styles.title}>Name</Text>
        <TextInput 
        style={styles.Input}
        placeholder='First Name'
        />
    </View>
    <View style={styles.NameInput}>
        <Text style={styles.title}>Last Name</Text>
        <TextInput 
        style={styles.Input}
        placeholder='Last Name'
        />
    </View>
    <View style={styles.NameInput}>
        <Text style={styles.title}>Name</Text>
        <TextInput 
        style={styles.Input}
        placeholder='Email'
        />
    </View>
  </View>
          <TouchableOpacity 
            style={styles.androidButtonWrapper}

          >
          <LinearGradient
            colors={['#888BF4', '#5151C6']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
             style={styles.androidButton}
          >
             <Text style={styles.buttonText}>
             SAVE CHANGES
            </Text>
          </LinearGradient>
           
          </TouchableOpacity>
  
  </ScrollView>
  )
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#FFFFF'
    },
    headerContainer: {
      width: '100%',
      height: 180,
      position: 'relative',
    },
    
    headerBackground: {
      width: '100%',
      height: 150,
      justifyContent: 'center',
      overflow:'hidden',
    },
    
    headerImage: {
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      opacity:0.7
    },
    
    headerContent: {
      flexDirection: 'row',
      alignItems: 'center',
    
    },
    
    username: {
       fontFamily:'Circular Std',
       fontWeight:700,
       fontSize:20,
       lineHeight:(1.2*20),
       color:'#FFFFFF',
       marginLeft:'25%'
    },
    profileWrapper: {
      position: 'absolute',
      bottom: -15,
      left: '50%',
      transform: [{ translateX: -40 }],
      width: 80,
      height: 80,
      borderRadius: 40,
      borderWidth: 3,
      borderColor: '#fff',
      overflow: 'hidden',
      backgroundColor: '#fff',
    },
    
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: 40,
    },
    Settings:{
      borderRadius:'50%',
      marginLeft:15
    },
    Profile:{
      alignItems:'center',
      top:40
    },
    ProfileName:{
      fontFamily:'Poppins',
      fontWeight:700,
      fontSize:20,
      color:'#242424'
    },
    inputContainer:{
        marginTop:50,
        paddingLeft:30,
        gap:30
    },
    title:{
        fontFamily:'Circular Std',
        fontWeight:400,
        fontSize:16,
        lineHeight:(1.2*16),
        color:'#242424'
    },
    Input:{
        paddingVertical:13,
        paddingHorizontal:20,
        backgroundColor:'#F3F5F7'
    },
    androidButtonWrapper:{
        paddingHorizontal:30,
        paddingVertical:10,
        borderRadius: 30,
        overflow: 'hidden',
        justifyContent:'flex-end',
        height:200
      },
      androidButton: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius:30,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        fontFamily:'Poppins',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16,
        textTransform: 'uppercase',
        lineHeight:(1.5*16)
      },

    
})