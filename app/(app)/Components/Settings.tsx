import { View, Text,StyleSheet, ImageBackground,StatusBar,Image, TouchableOpacity,Linking} from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import EditIcon from '../../../assets/images/icons/editWhite.svg';
import ArrowIcon from '../../../assets/images/icons/chevron-right.svg';
import LogoutIcon from '../../../assets/images/icons/logout.svg'

export default function Settings() {
      const router = useRouter();
  return (
    <ImageBackground style={styles.Container} source={require('../../../assets/images/splash.jpg')} blurRadius={14}>
        <Stack.Screen options={{ headerShown: false }} />
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <SafeAreaView style={styles.ContentContainer}>
            <View style={styles.userInfo}>
                <Image
                source={require('../../../assets/images/UserProfile.png')} 
                />
                <View style={styles.userMail}>
                    <Text style={styles.userName}>Bruno Pham</Text>
                    <Text style={styles.userEmail}>thanhphamdhbk@gmail.com</Text>
                </View>
                <TouchableOpacity style={styles.EditProfile} onPress={()=>router.navigate('/screens/EditProfile')}>
                   <EditIcon/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        <View style={styles.LinksContainer}>
            <TouchableOpacity style={styles.Links}  onPress={()=>Linking.openURL('http://www.gmail.com')}>
                <Text style={styles.Link}>Email</Text>
                <TouchableOpacity style={styles.LinkIcon}  onPress={()=>Linking.openURL('http://www.gmail.com')}>
                   <ArrowIcon/>
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Links} onPress={()=>Linking.openURL('http://www.Instagram.com')}>
                <Text style={styles.Link}>Instagram</Text>
                <TouchableOpacity style={styles.LinkIcon} onPress={()=>Linking.openURL('http://www.Instagram.com')}>
                   <ArrowIcon/>
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Links} onPress={()=>Linking.openURL('http://www.X.com')}>
                <Text style={styles.Link}>Twitter</Text>
                <TouchableOpacity style={styles.LinkIcon}onPress={()=>Linking.openURL('http://www.X.com')}>
                   <ArrowIcon/>
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Links}>
                <Text style={styles.Link}>Website</Text>
                <TouchableOpacity style={styles.LinkIcon}>
                   <ArrowIcon/>
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Links}>
                <Text style={styles.Link}>Paypal</Text>
                <TouchableOpacity style={styles.LinkIcon}>
                   <ArrowIcon/>
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Links}>
                <Text style={styles.Link}>Change password</Text>
                <TouchableOpacity style={styles.LinkIcon}>
                   <ArrowIcon/>
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Links}>
                <Text style={styles.Link}>About i.click</Text>
                <TouchableOpacity style={styles.LinkIcon}>
                   <ArrowIcon/>
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Links}>
                <Text style={styles.Link}>Terms & privacy</Text>
                <TouchableOpacity style={styles.LinkIcon}>
                   <ArrowIcon/>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.Logout} onPress={()=> router.replace('/Signin')}>
            <LogoutIcon/>
            <Text style={styles.ButtonText}>Log out</Text>
        </TouchableOpacity>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
   Container:{
    flex:1,
   },
   ContentContainer:{
    paddingVertical:14,
    paddingHorizontal:10,
   },
   userInfo:{
    paddingVertical:14,
    paddingHorizontal:10,
    gap:16,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'rgba(255, 255, 255, 0.1)',
    borderRadius:10

   },
   userName:{
     fontFamily:'Circular Std',
     fontSize:16,
     fontWeight:700,
     lineHeight:(1.2*16),
     color:'#FFFFFF'
   },
   userEmail:{
    fontFamily:'Circular Std',
    fontWeight: 400,
    fontSize:12,
    lineHeight:(1.5*12),
    color:'#C0C0C0'
   },
   EditProfile:{
    flexDirection:'row',
    marginLeft:'auto',
    justifyContent:'flex-end'
   },
   LinksContainer:{
    width:'60%',
    alignItems:'center',
    marginTop:20,
    gap:16

   },
   Links:{
    width:'100%',
    paddingVertical:6,
    paddingLeft:20,
    paddingRight:6,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'rgba(255, 255, 255, 0.2)',
    borderTopRightRadius:40,
    borderBottomRightRadius:40,
   },
   Link:{
    fontFamily:'Circular Std',
    fontWeight:400,
    fontSize:16,
    lineHeight:(1.2*16),
    color:'#FFFFFF',
    flex:1
   },
   LinkIcon:{
    width:30,
    height:30
   },
   Logout:{
    backgroundColor:'#FFFFFF',
    flexDirection:'row',
    marginTop:20,
    marginLeft:30,
    width:100,
    paddingHorizontal:14,
    paddingVertical:8,
    borderRadius:30,
    gap:4
   },
   ButtonText:{
    fontWeight:400,
    fontSize:14,
    lineHeight:(1.5*14),
    color:'#333333'
   }
})