import { View, Text,StatusBar,StyleSheet,ScrollView, TouchableOpacity,Image} from 'react-native';
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import FollowButton from '../Components/FollowButton'

export default function activity() {
  return (
    <ScrollView style={styles.Container}>
                <Stack.Screen options={{ headerShown: false }} />
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <SafeAreaView style={styles.Safearea}>
            <View style={styles.Header}>
                <Text style={styles.Heading}>Activity</Text>
                <Text style={styles.HeadingBlue}>(03)</Text>
            </View>
            <View style={styles.contentContainer}>
                <TouchableOpacity style={styles.Card}>
                    <View style={styles.ProfileImage}>
                        <Image
                         source={require('../../assets/images/Ellipse 192.png')} 
                        />
                    </View>
                    <View style ={styles.ProfileNameView}>
                        <Text style={styles.ProfileName}>Bruno Pham</Text>
                        <View style={styles.TextContainer}>
                        <Text style={styles.Liked}>liked</Text>
                        <Text style={styles.LikedBlue}>“Autumn in my heart”</Text>
                        </View>
                        <Text style={styles.PostedTime}>2 minutes ago</Text>
                    </View>
                    <View style={styles.PostImage}>
                        <Image
                         source={require('../../assets/images/5IHz5WhosQE.png')} 
                         style={styles.PostedImage}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Card}>
                    <View style={styles.ProfileImage}>
                        <Image
                         source={require('../../assets/images/Pimage2.png')} 
                        />
                    </View>
                    <View style ={styles.ProfileNameView}>
                        <Text style={styles.ProfileName}>Bruno Pham</Text>
                        <View style={styles.TextContainer}>
                        <Text style={styles.Liked}>liked</Text>
                        <Text style={styles.LikedBlue}>“Autumn in my heart”</Text>
                        </View>
                        <Text style={styles.PostedTime}>2 minutes ago</Text>
                    </View>
                    <View style={styles.PostImage}>
                       <FollowButton/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Card}>
                    <View style={styles.ProfileImage}>
                        <Image
                         source={require('../../assets/images/Pimage3.png')} 
                        />
                    </View>
                    <View style ={styles.ProfileNameView}>
                        <Text style={styles.ProfileName}>Bruno Pham</Text>
                        <View style={styles.TextContainer}>
                        <Text style={styles.Liked}>liked</Text>
                        <Text style={styles.LikedBlue}>“Autumn in my heart”</Text>
                        </View>
                        <Text style={styles.PostedTime}>2 minutes ago</Text>
                    </View>
                    <View style={styles.PostImage}>
                        <Image
                         source={require('../../assets/images/5IHz5WhosQE.png')} 
                         style={styles.PostedImage}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Card}>
                    <View style={styles.ProfileImage}>
                        <Image
                         source={require('../../assets/images/Pimage4.png')} 
                        />
                    </View>
                    <View style ={styles.ProfileNameView}>
                        <Text style={styles.ProfileName}>Bruno Pham</Text>
                        <View style={styles.TextContainer}>
                        <Text style={styles.Liked}>liked</Text>
                        <Text style={styles.LikedBlue}>“Autumn in my heart”</Text>
                        </View>
                        <Text style={styles.PostedTime}>2 minutes ago</Text>
                    </View>
                    <View style={styles.PostImage}>
                        <Image
                         source={require('../../assets/images/5IHz5WhosQE.png')} 
                         style={styles.PostedImage}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Card}>
                    <View style={styles.ProfileImage}>
                        <Image
                         source={require('../../assets/images/Pimage5.png')} 
                        />
                    </View>
                    <View style ={styles.ProfileNameView}>
                        <Text style={styles.ProfileName}>Bruno Pham</Text>
                        <View style={styles.TextContainer}>
                        <Text style={styles.Liked}>liked</Text>
                        <Text style={styles.LikedBlue}>“Autumn in my heart”</Text>
                        </View>
                        <Text style={styles.PostedTime}>2 minutes ago</Text>
                    </View>
                    <View style={styles.PostImage}>
                        <FollowButton/>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"#FFFFF",
    },
    Safearea:{
        backgroundColor:'#FFFFF'
    },
    Header:{
        paddingVertical:10,
        paddingHorizontal:20,
        flexDirection:'row'
    },
    Heading:{
        fontFamily:'Poppins',
        fontWeight:700,
        fontSize:24,
        color:'#000000'
    },
    HeadingBlue:{
        fontFamily:'Poppins',
        fontWeight:700,
        fontSize:24,
        color:'#5151C6',
        marginLeft:5
    },
    contentContainer:{
        backgroundColor:'#FFFFF'
    },
    Card:{
        flexDirection:'row',
        paddingVertical:14,
        paddingLeft:16,
        paddingRight:14,
        gap:14,
        marginBottom:10,
        backgroundColor:'#FFFFF'
    },
    ProfileImage:{

    },
    ProfileNameView:{
        gap:10
    },
    ProfileName:{
        fontFamily:'Poppins',
        fontWeight:700,
        fontSize:16,
        color:'#212121'
    },
    Liked:{
         fontFamily:'Poppins',
         fontWeight:500,
         fontSize:14,
         color:'#212121'
    },
    LikedBlue:{
        fontFamily:'Poppins',
         fontWeight:500,
         fontSize:14,
         color:'#888BF4'
    },
    PostedTime:{
        fontFamily:'Poppins',
        fontWeight:500,
        fontSize:12,
        color:'#BDBDBD'
    },
    PostImage:{
        flex:1,
        alignItems:'flex-end'
    },
    PostedImage:{
        alignSelf:'flex-end'
    },
    TextContainer:{
        flexDirection:'row'
    }


})