import { useState } from 'react';
import { View, Text,ScrollView,StyleSheet,Platform,StatusBar,TextInput, TouchableOpacity,Image } from 'react-native'
import React from 'react';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import Posts from '../Components/PostsArray';
import ViewIcon from '../../assets/images/icons/eye.svg';
import CommentIcon from '../../assets/images/icons/active-chat.svg';
import LikeIcon from '../../assets/images/icons/heart.svg';
import BackIcon from '../../assets/images/icons/arrow-left.svg';
import HeartIcon from '../../assets/images/icons/heart 2.svg';
import PlusCircle from '../../assets/images/icons/plus-circle 2.svg'
import UploadIcon from '../../assets/images/icons/upload.svg'



export default function FeedView() {
   const router = useRouter();
   const params  = useLocalSearchParams();
   const id = Number(params.id)-1;
   const handleBack=()=>{
      if(router.canGoBack()){
        router.back();
      }else{
        router.replace('/(tabs)/homescreen')
      }

   }
   const gotoComments =()=>{
    router.push('/screens/Comments')
   }
  return (
    <ScrollView style={styles.Container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <SafeAreaView>
        
         <View style={styles.TopContainer}>
            <TouchableOpacity style={styles.backarrow} onPress={handleBack}>
                <BackIcon/>
            </TouchableOpacity>
            <View style={styles.share}>
            <TouchableOpacity style={styles.button}>
                <HeartIcon/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <PlusCircle/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <UploadIcon/>
            </TouchableOpacity>
            </View>

         </View>
         <View style={styles.Post}>
            <View style={styles.PostHead}>
                <View style={styles.profilePhoto}>
                   <Image
                    source={Posts[id].profilephoto}
                   />
                   <Text style={styles.profileName}>{Posts[id].profilename}</Text>
                </View>
                 <View style={styles.postedTime}>
                 <Text style={styles.TimeText}>{Posts[id].postedtime}</Text>
                 </View>
            </View>
            <View style={styles.Postcard}>
                <Image
                source={Posts[id].image}
                resizeMode='cover'
                />
            </View>
            <View style={styles.interact}>
                <TouchableOpacity style={styles.comment}>
                    <Text style={styles.commentText}>20</Text>
                    <ViewIcon/>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.comment}>
                    <Text style={styles.commentText}>20</Text>
                    <CommentIcon/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.like}>
                <Text style={styles.commentText}>125</Text>
                <LikeIcon/>
                </TouchableOpacity>
            </View>
            <View style={styles.description}>
                <Text style={styles.titleText}>{Posts[id].title}</Text>
                <Text style={styles.descriptionText} numberOfLines={5} ellipsizeMode="tail">{Posts[id].description}</Text>
            </View>
         </View>
         <View style={styles.Comment}>
            <View style={styles.commentImage}>
                <Image
                source={require('../../assets/images/Ellipse 192.png')}
                />
            </View>
            <TouchableOpacity style={styles.commentInput} onPress={()=>gotoComments()}> 
              <Text style={styles.placeholder}>Add a comment</Text>
            </TouchableOpacity>
         </View>
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
    Post:{
        
        marginTop:20
    },
    PostHead:{
        paddingVertical:10,
        paddingHorizontal:14,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%'
    },
    profilePhoto:{
        marginRight:10,
        flexDirection:"row",
        flexShrink:1
    },
    profileName:{
        fontSize:16,
        fontWeight:500,
        lineHeight:(1.5*16),
        fontFamily:'Poppins',
        color:'#242424',
        marginLeft:10
    },
    postedTime:{
       flexShrink:1
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
        alignItems:'center',
        justifyContent:'space-around'
    },
    comment:{
        flexDirection:'row',
        alignItems:'center',

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
    },
    description:{
        marginTop:20,
        paddingHorizontal:16,
        width:'100%'
        
    },
    titleText:{
        fontFamily:'Poppins',
        fontSize:20,
        fontWeight:700,
        lineHeight:(1.2*20),
        color:'#212121',
        marginBottom:10
    },
    descriptionText:{
        fontFamily:'Poppins',
        fontWeight:500,
        fontSize:14,
        lineHeight:(1.5*14),
        color:'#828282',
        letterSpacing:-0.1,
        flexWrap:'wrap',
        maxWidth:330
    },
    TopContainer:{
        paddingVertical:12,
        paddingHorizontal:16,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    share:{
        flexDirection:'row',
        gap:20,
        alignItems:'center'
    },
    button:{},
    backarrow:{},
    Comment:{
        paddingHorizontal:12,
        paddingVertical:16,
        alignItems:'center',
        flexDirection:'row'
    },
    commentInput:{
        flex:1
    },
    placeholder:{
        fontFamily:'Poppins',
        fontSize:14,
        fontWeight:500,
        lineHeight:(1.5*14),
        color:'#BDBDBD',
        marginLeft:10
    }

})