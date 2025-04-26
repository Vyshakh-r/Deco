import { View, Text,SafeAreaView,ScrollView,StyleSheet, ImageBackground, TouchableOpacity,StatusBar,Image, Settings } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import SettingsIcon from '../../assets/images/icons/SettingWhite.svg';
import Instagram from '../../assets/images/icons/instagram.svg';
import Facebook from '../../assets/images/icons/facebook.svg';
import Golbal from '../../assets/images/icons/globe.svg';





export default function profile() {
  const [isActive,SetIsActive]= useState(false);
  const [isActive1,SetIsActive1]= useState(true);
  const router = useRouter();
  return (
    <ScrollView style={styles.Container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.headerContainer}>
        <ImageBackground
             source={require('../../assets/images/splash.jpg')}
              style={styles.headerBackground}
           imageStyle={styles.headerImage}
             >
          <View style={styles.headerContent}>
             <Text style={styles.username}>@brunopham</Text>
             <TouchableOpacity style ={styles.Settings} onPress={()=>router.navigate('/Components/Settings')}>
               <SettingsIcon/>
              </TouchableOpacity>
         </View>
       </ImageBackground>

  <View style={styles.profileWrapper}>
    <Image
      source={require('../../assets/images/Pimage4.png')}
      style={styles.profileImage}
    />
  </View>
  </View>
  <View style={styles.Profile}>
    <Text style={styles.ProfileName}>Bruno Pham</Text>
    <Text style={styles.about}>Da Nang, Vietnam</Text>
    <View style={styles.FollowInfo}>
      <TouchableOpacity style={styles.Following}>
        <Text style={styles.followCount}>220</Text>
        <Text style={styles.followers}>Followers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Following}>
        <Text style={styles.followCount}>150</Text>
        <Text style={styles.followers}>Following</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.SocialMedia}>
     <TouchableOpacity style={Instagram}>
      <Golbal/>
     </TouchableOpacity>
    <View style={styles.Dot}></View>
     <TouchableOpacity style={Instagram}>
      <Instagram/>
     </TouchableOpacity>
    <View style={styles.Dot}></View>
     <TouchableOpacity style={Instagram}>
      <Facebook/>
     </TouchableOpacity>
  </View>
  <View style={styles.userIntaractions}>
    <TouchableOpacity style={styles.Titles} onPress={()=> {SetIsActive(true);SetIsActive1(false)}}>
      <Text style={isActive ? styles.ActiveTitle : styles.Title }>200 shots</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.Titles2} onPress={()=> {SetIsActive1(true);SetIsActive(false)}}>
     <Text style={isActive1 ?styles.ActiveTitle : styles.Title}>10 Collections</Text>
    </TouchableOpacity>
  </View>
  <View style={isActive1==true  ? styles.CollectionContainer : styles.InactiveCollection} >
  <TouchableOpacity style={styles.Collections}>
    <ImageBackground style={ styles.Images} >
      <View style={styles.row}>
      <Image
       source={require('../../assets/images/photo-format-4.jpg')} 
       style ={styles.image}
      />
      <Image
       source={require('../../assets/images/K_b41GaWC5Y.png')} 
       style ={styles.image}
      />
      </View>
      
      <View style={styles.row}>
      <Image
       source={require('../../assets/images/photo-format-4.jpg')} 
       style ={styles.image}
      />
      <Image
       source={require('../../assets/images/K_b41GaWC5Y.png')} 
       style ={styles.image}
      />
      </View>
    </ImageBackground>
    <View style={styles.UnderLine}>
      <Text style={styles.UnderText}>25 shots</Text>
    </View>
    <View style={styles.CenterdText}>
      <Text style={styles.CenterText}>YOUR LIKES</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.Collections}>
    <ImageBackground style={styles.Images} >
      <View style={styles.row}>
      <Image
       source={require('../../assets/images/photo-format-4.jpg')} 
       style ={styles.image}
      />
      <Image
       source={require('../../assets/images/K_b41GaWC5Y.png')} 
       style ={styles.image}
      />
      </View>
      
      <View style={styles.row}>
      <Image
       source={require('../../assets/images/photo-format-4.jpg')} 
       style ={styles.image}
      />
      <Image
       source={require('../../assets/images/K_b41GaWC5Y.png')} 
       style ={styles.image}
      />
      </View>
    </ImageBackground>
    <View style={styles.UnderLine}>
      <Text style={styles.UnderText}>25 shots</Text>
    </View>
    <View style={styles.CenterdText}>
      <Text style={styles.CenterText}>DOWNLOAD</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.Collections}>
    <ImageBackground style={styles.Images} >
      <View style={styles.row}>
      <Image
       source={require('../../assets/images/photo-format-4.jpg')} 
       style ={styles.image}
      />
      <Image
       source={require('../../assets/images/K_b41GaWC5Y.png')} 
       style ={styles.image}
      />
      </View>
      
      <View style={styles.row}>
      <Image
       source={require('../../assets/images/photo-format-4.jpg')} 
       style ={styles.image}
      />
      <Image
       source={require('../../assets/images/K_b41GaWC5Y.png')} 
       style ={styles.image}
      />
      </View>
    </ImageBackground>
    <View style={styles.UnderLine}>
      <Text style={styles.UnderText}>25 shots</Text>
    </View>
    <View style={styles.CenterdText}>
      <Text style={styles.CenterText}>PORTRAIT{'\n'}PHOTOGRAPHY</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.Collections}>
    <ImageBackground style={styles.Images} >
      <View style={styles.row}>
      <Image
       source={require('../../assets/images/photo-format-4.jpg')} 
       style ={styles.image}
      />
      <Image
       source={require('../../assets/images/K_b41GaWC5Y.png')} 
       style ={styles.image}
      />
      </View>
      
      <View style={styles.row}>
      <Image
       source={require('../../assets/images/photo-format-4.jpg')} 
       style ={styles.image}
      />
      <Image
       source={require('../../assets/images/K_b41GaWC5Y.png')} 
       style ={styles.image}
      />
      </View>
    </ImageBackground>
    <View style={styles.UnderLine}>
      <Text style={styles.UnderText}>25 shots</Text>
    </View>
    <View style={styles.CenterdText}>
      <Text style={styles.CenterText}>PORTRAIT{'\n'}PHOTOGRAPHY</Text>
    </View>
  </TouchableOpacity>
  </View>
  <View style={isActive ? styles.GridContainer : styles.InactiveCollection}>
    <View style={styles.ImageGrid}>
      <Image style={styles.GridImage1}  source={require('../../assets/images/gridimage1.png')}/>
      <Image style={styles.GridImage2}  source={require('../../assets/images/post-3.jpg')}/>
      <Image style={styles.GridImage1}  source={require('../../assets/images/gridimage2.png')}/>
      <Image style={styles.GridImage3}  source={require('../../assets/images/photo-format-3.jpg')}/>
    </View>
  </View>
  </View>
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
      justifyContent: 'space-between',
      alignItems: 'center',
    
    },
    
    username: {
       fontFamily:'Poppins',
       fontWeight:700,
       fontSize:14,
       color:'#FFFFFF',
       marginLeft:'40%'
    },
    profileWrapper: {
      position: 'absolute',
      bottom: -25,
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
      marginRight:10,
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
    about:{
      fontFamily:'Poppins',
      fontWeight:500,
      fontSize:16,
      color:'#8F90A7',
      marginTop:10,
    },
    FollowInfo:{
      paddingVertical:8,
      paddingHorizontal:20,
      flexDirection:'row',
      gap:48
    },
    Following:{
      flexDirection:'row'

    },
    followCount:{
      fontFamily:'Poppins',
      fontWeight:500,
      fontSize:16,
      color:'#242424'
    },
    followers:{
      fontFamily:'Poppins',
      fontWeight:500,
      fontSize:16,
      color:'#BDBDBD',
      marginLeft:5
    },
    SocialMedia:{
      flexDirection:'row',
      gap:24,
      marginTop:20,
      alignItems:'center'
    },
    Dot:{
      backgroundColor:'#5151C6',
      width:6,
      height:6,
      borderRadius:3
    },
    userIntaractions:{
      marginTop:20,
      flexDirection:'row',
      paddingVertical:6,
      paddingHorizontal:10,
      gap:80
    },
    Title:{
      fontFamily:'Poppins',
      fontSize:16,
      fontWeight:500,
      color:'#BDBDBD'

    },
    ActiveTitle:{
      fontFamily:'Poppins',
      fontSize:16,
      fontWeight:500,
      color:'#5151C6'
    },
    CollectionContainer:{
      flexWrap:'wrap',
      flexDirection:'row',
      gap:10,
      paddingHorizontal:15,
      justifyContent:'center'
    },
    Collections:{
        gap:6,
    },
    Images:{
      borderRadius:10,
      overflow:'hidden',
      alignItems:'center',
      marginTop:20
    },
    row:{
      flexDirection:'row',
    },

    image:{
      width:79,
      height:79
    },
    UnderText:{
      fontFamily:'Poppins',
      fontWeight:500,
      fontSize:14,
      color:'#828282'
    },
    CenterdText:{
      backgroundColor:'transparent',
      position:'relative',
      top:-120,
      right:-40,
    },
    CenterText:{
      fontFamily:'Poppins',
      fontWeight:700,
      fontSize:14,
      color:'#FFFFFF',
    },
    InactiveCollection:{
      display:'none'
    },
    GridContainer:{
      marginTop:20,
      alignItems:'center',
      paddingHorizontal:15,
      justifyContent:'center'
    },
    ImageGrid:{
      flexDirection:'row',
      flexWrap:'wrap',
      gap:15,
      justifyContent:'center'
    },
    GridImage1:{
      borderRadius:10,
      width:155,
      height:190,
    },
    GridImage2:{
      borderRadius:10,
      width:155,
      height:100
    },
    GridImage3:{
      borderRadius:10,
      height:155,
      width:155,
    },


    
})