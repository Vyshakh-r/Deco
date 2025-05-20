import { useState } from 'react';
import { View, Text,ScrollView,StyleSheet,Platform,StatusBar,TextInput, TouchableOpacity,Image } from 'react-native'
import React from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import Posts from '../(app)/Components/PostsArray';
import AddIcon from '../../assets/images/icons/plus-circle.svg';
import CommentIcon from '../../assets/images/icons/active-chat.svg';
import LikeIcon from '../../assets/images/icons/heart.svg';
import { hide } from 'expo-router/build/utils/splash';


export default function Homescreen() {
    const router = useRouter();
    const HandleLogin=(id)=>{
        router.replace({pathname:'/screens/FeedView',params:{id:String(id)}})         
    }
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const storedUserData = await AsyncStorage.getItem('userData');
          } catch (error) {
            console.log('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, []);
      const isFocused = useIsFocused();
  return (
    <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
        <Stack.Screen options={{ headerShown: false }} />
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <SafeAreaView>
        <View style={styles.Post}>
            <View style={styles.PostHead}>
                <View style={styles.profilePhoto}>
                   <Image
                    source={Posts[0].profilephoto}
                   />
                </View>
                 <Text style={styles.profileName}>{Posts[0].profilename}</Text>
                 <View style={styles.postedTime}>
                 <Text style={styles.TimeText}>{Posts[0].postedtime}</Text>
                 </View>
            </View>
            <TouchableOpacity style={styles.Postcard} onPress={()=> HandleLogin(Posts[0].id)}>
                <Image
                source={Posts[0].image}
                resizeMode='cover'
                />
            </TouchableOpacity>
            <View style={styles.interact}>
                <AddIcon/>
                <TouchableOpacity style={styles.comment}>
                    <Text style={styles.commentText}>20</Text>
                    <CommentIcon/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.like}>
                <Text style={styles.commentText}>125</Text>
                <LikeIcon/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.Post}>
            <View style={styles.PostHead}>
                <View style={styles.profilePhoto}>
                   <Image
                    source={Posts[1].profilephoto}
                   />
                </View>
                 <Text style={styles.profileName}>{Posts[1].profilename}</Text>
                 <View style={styles.postedTime}>
                 <Text style={styles.TimeText}>{Posts[1].postedtime}</Text>
                 </View>
            </View>
            <TouchableOpacity style={styles.Postcard} onPress={()=> HandleLogin(Posts[1].id)}>
                <Image
                source={Posts[1].image}
                resizeMode='cover'
                />
            </TouchableOpacity>
            <View style={styles.interact}>
                <AddIcon/>
                <TouchableOpacity style={styles.comment}>
                    <Text style={styles.commentText}>20</Text>
                    <CommentIcon/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.like}>
                <Text style={styles.commentText}>125</Text>
                <LikeIcon/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.Post}>
            <View style={styles.PostHead}>
                <View style={styles.profilePhoto}>
                   <Image
                    source={Posts[2].profilephoto}
                   />
                </View>
                 <Text style={styles.profileName}>{Posts[2].profilename}</Text>
                 <View style={styles.postedTime}>
                 <Text style={styles.TimeText}>{Posts[2].postedtime}</Text>
                 </View>
            </View>
            <TouchableOpacity style={styles.Postcard} onPress={()=> HandleLogin(Posts[2].id)}>
                <Image
                source={Posts[2].image}
                resizeMode='cover'
                />
            </TouchableOpacity>
            <View style={styles.interact}>
                <AddIcon/>
                <TouchableOpacity style={styles.comment}>
                    <Text style={styles.commentText}>20</Text>
                    <CommentIcon/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.like}>
                <Text style={styles.commentText}>125</Text>
                <LikeIcon/>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        marginTop:0
    },
    Search:{
        backgroundColor:'#F3F5F7',
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        paddingVertical:8,
        paddingHorizontal:14,

    },
    input:{
        flex:1
    },
    SearchIcon:{
        overflow:'hidden',

    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    sendContainer:{
        backgroundColor:'#F6F7F9',
        padding:6,
        gap:10,
        width:36,
        paddingHorizontal:14,
        alignItems:'center'
    },
    Title:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
        paddingHorizontal:14,

    },
    HeadingText:{
        fontSize:16,
        fontWeight:500,
        letterSpacing:-0.1,
        lineHeight:(1.2*16),
        color:'#BDBDBD'
    },
    HeadingActive:{
        fontSize:16,
        fontWeight:700,
        letterSpacing:-0.1,
        lineHeight:(1.2*16),
        color:'#888BF4'
    },
    PostHead:{
        paddingVertical:10,
        paddingHorizontal:14,
        flexDirection:'row',
        alignItems:'center'
    },
    profilePhoto:{
        marginRight:10
    },
    profileName:{
        fontSize:16,
        fontWeight:500,
        lineHeight:(1.5*16),
        fontFamily:'Poppins',
        color:'#242424'
    },
    postedTime:{
       flex:1,
       alignItems:'flex-end'
    },
    TimeText:{
        fontSize:14,
        fontWeight:500,
        lineHeight:(1.5*14),
        color:'#BDBDBD',
        
    },
    Postcard:{
        width:'100%',
        alignItems:'center'

    },
    interact:{
        paddingVertical:12,
        paddingHorizontal:14,
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        alignItems:'center'
    },
    comment:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:'auto'

    },
    like:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20
    },
    commentText:{
        fontFamily:'Poppins',
        fontSize:14,
        fontWeight:500,
        lineHeight:(1.5*14),
        color:'#828282',
        marginRight:5
    }

})