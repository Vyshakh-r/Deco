import { View, Text, SafeAreaView,StyleSheet,Image,ScrollView, TouchableOpacity, TextInput,Button } from 'react-native'
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import BackIcon from '../../assets/images/icons/arrow-left.svg';
import EditIcon from '../../assets/images/icons/edit-square.svg'
import { LinearGradient } from 'expo-linear-gradient';
import Heart from '../../assets/images/icons/heart.svg';
import HeartActive from '../../assets/images/icons/activeheart.svg';


export default function Comments() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const [isLiked1,setIsLiked1] = useState(false)
    const [isLiked2,setIsLiked2] = useState(false)
    const [isLiked3,setIsLiked3] = useState(false)
  return (
    <ScrollView style={styles.body}>
        <SafeAreaView style={[styles.Container,{paddingTop:insets.top}]}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={()=>router.back()}>
                    <BackIcon/>
                </TouchableOpacity>
                <View style={styles.Heading}>
                    <Text style={styles.headingText}>Comments</Text>
                </View>
                <View style={styles.edit}>
                    <EditIcon/>
                </View>
            </View>
            <View style={styles.CommentContainer}>
                <View style={styles.flexContainer}>
                    <View>
                        <Image source={require('../../assets/images/Ellipse 192.png')}/>
                    </View>
                    <View style={styles.marginLeft}>
                        <Text style={styles.profileName}>Bruno Pham</Text>
                        <Text style={styles.comment}>Great shot! I love it</Text>
                        <View style={styles.showContainer}>
                            <Text style={styles.postedTime}>2 mins ago</Text>
                            <Text style={styles.Like}>Like</Text>
                            <TouchableOpacity style={styles.likeCount} onPress={() => setIsLiked1(!isLiked1)}  >  
                                <Text style={styles.postedTime}>02</Text>
                                {isLiked1 ? <HeartActive /> : <Heart />}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.CommentContainer}>
                <View style={styles.flexContainer}>
                    <View>
                        <Image source={require('../../assets/images/Ellipse 192.png')}/>
                    </View>
                    <View style={styles.marginLeft}>
                        <Text style={styles.profileName}>Bruno Pham</Text>
                        <Text style={styles.comment}>Great shot! I love it</Text>
                        <View style={styles.showContainer}>
                            <Text style={styles.postedTime}>2 mins ago</Text>
                            <Text style={styles.Like}>Like</Text>
                            <TouchableOpacity style={styles.likeCount}  onPress={() => setIsLiked2(!isLiked2)}>
                                <Text style={styles.postedTime}>02</Text>
                                {isLiked2 ? <HeartActive /> : <Heart />}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.CommentContainer}>
                <View style={styles.flexContainer}>
                    <View>
                        <Image source={require('../../assets/images/Ellipse 192.png')}/>
                    </View>
                    <View style={styles.marginLeft}>
                        <Text style={styles.profileName}>Bruno Pham</Text>
                        <Text style={styles.comment}>Great shot! I love it</Text>
                        <View style={styles.showContainer}>
                            <Text style={styles.postedTime}>2 mins ago</Text>
                            <Text style={styles.Like}>Like</Text>
                            <TouchableOpacity style={styles.likeCount} onPress={() => setIsLiked3(!isLiked3)}>
                                <Text style={styles.postedTime}>02</Text>
                                {isLiked3 ? <HeartActive /> : <Heart />}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.input}>
                <TextInput placeholder='Type something' style={styles.textInput}/>
                <TouchableOpacity style={styles.button}>
                <LinearGradient
                  colors={['#888BF4', '#5151C6']}
                   start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.button}
                >
                    <Text style={styles.buttonText}>Post</Text>
                </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    body:{
        backgroundColor:'#fff',
        
    },
    header:{
        paddingVertical:12,
        paddingHorizontal:16,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#fff'
    },
    headingText:{
        fontFamily:'Poppins',
        fontWeight:700,
        fontSize:20,
        lineHeight:(1.2*20),
        color:'#000000'
    },
    CommentContainer:{
        flex:1,
        padding:16,
        borderRadius:8,
        gap:14,
        backgroundColor:'#F6F7F9',
        marginBottom:10
    },
    flexContainer:{
        flexDirection:'row'
    },
    marginLeft:{
        marginLeft:10
    },
    profileName:{
        fontFamily:'Poppins',
        fontWeight:700,
        fontSize:16,
        color:'#212121'
    },
    comment:{
        fontFamily:'Poppins',
        fontWeight:500,
        fontSize:14,
        lineHeight:(1.5*14),
        color:"#212121",
        marginTop:5
    },
    showContainer:{
        width:'95%',
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between',
        gap:40
    },
    postedTime:{
        fontFamily:'Poppins',
        fontSize:12,
        fontWeight:500,
        lineHeight:(1.5*12),
        color:'#828282'
    },
    Like:{
        fontFamily:'Poppins',
        fontSize:12,
        fontWeight:500,
        lineHeight:(1.5*12),
        color:'#242424'
    },
    likeCount:{
        flexDirection:'row',
        gap:4
        
    },
    input:{
        paddingVertical:12,
        paddingHorizontal:16,
        flexDirection:'row',
        alignItems:'center',
    },
    textInput:{
        fontSize:14,
        fontWeight:500,
        color:'#BDBDBD',
        flex:1
    },
    button:{
          width:50,
          paddingVertical:5,
          paddingHorizontal:10,
          borderRadius:30
    },
    buttonText:{
        fontFamily:'Poppins',
        fontSize:14,
        fontWeight:500,
        color:'#FFFFFF'
    }
})