import { useState } from 'react';
import { View, Text,ScrollView,StyleSheet,Platform,StatusBar,TextInput, TouchableOpacity,Image } from 'react-native'
import React from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import Search from '../(app)/Components/Search'
import Posts from '../(app)/Components/PostsArray';
import SearchIcon from '../../assets/images/icons/active-Search.svg';
import SendIcon from '../../assets/images/icons/send.svg';
import AddIcon from '../../assets/images/icons/plus-circle.svg';
import CommentIcon from '../../assets/images/icons/active-chat.svg';
import LikeIcon from '../../assets/images/icons/heart.svg';

export default function TrendingScreen() {
    const [searchText,setSearchText] = useState();
    const router = useRouter();
    const HandleLogin=(id)=>{
        router.replace({pathname:'/screens/FeedView',params:{id:String(id)}})         
    }
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const storedUserData = await AsyncStorage.getItem('userData');
            if (storedUserData !== null) {
              const { email, password } = JSON.parse(storedUserData);
              console.log('Email:', email);
              console.log('Password:', password);
            } else {
              console.log('No user data found');
            }
          } catch (error) {
            console.log('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, []);
      const trendingposts= Posts.filter(post=> post.category=== 'trending')
  return (
    <ScrollView style={styles.Container}>
        <Stack.Screen options={{ headerShown: false }} />
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <SafeAreaView>
        {trendingposts.map((item)=>
        <View key={item.id} style={styles.Post}>
            <View style={styles.PostHead}>
                <View style={styles.profilePhoto}>
                     <Image
                       source={item.profilephoto}
                       key={item.id}
                     />
                  
                </View>
                 <Text style={styles.profileName}>{item.profilename}</Text>
                 <View style={styles.postedTime}>
                 <Text style={styles.TimeText}>{item.postedtime}</Text>
                 </View>
            </View>
            <TouchableOpacity style={styles.Postcard} onPress={()=> HandleLogin(Posts[item.id-1].id)}>
                <Image
                source={item.image}
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
        )}
        </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#FFFFFF'
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