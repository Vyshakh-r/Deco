import { useState } from 'react';
import { View, Text,ScrollView,StyleSheet,Platform,StatusBar,TextInput, TouchableOpacity,Image, ImageBackground } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import Search from '../(app)/Components/Search';

export default function homescreen() {
    const [searchText,setSearchText] = useState();
    const Cards = [
        {   
            image:require('../../assets/images/mj2NwYH3wBA.png'),
            Title:'PHOTOGRAPHY'
        },
        {   
            image:require('../../assets/images/social.png'),
            Title:'UI DESIGN'
        },
        {  
            image:require('../../assets/images/card3.png'),
            Title:'ILLUSTRATION'
        },
        { 
            image:require('../../assets/images/mj2NwYH3wBA.png'),
            Title:'PHOTOGRAPHY'
        },
    ]
  return (
    <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
        <Stack.Screen options={{ headerShown: false }} />
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <SafeAreaView>
        <Search/>
        <View style={styles.HeadingContainer}>
            <View style={styles.HeadingText}>
                <Text style={styles.Heading}>Topic</Text>
            </View>
            <TouchableOpacity style={styles.More}>
                <Text style={styles.MoreText}>View more</Text> 
            </TouchableOpacity>
        </View>
        <View  style={styles.HorizontalScroll}>
            <ScrollView horizontal={true} style={styles.HorizontalContainer}>
               <TouchableOpacity style={styles.Cards}>
                <ImageBackground style={styles.ContentContainer} resizeMode='cover' source={Cards[0].image}>
                  <Text style={styles.CardText}>{Cards[0].Title}</Text>
                </ImageBackground>
               </TouchableOpacity>
               <TouchableOpacity style={styles.Cards}>
                <ImageBackground style={styles.ContentContainer} resizeMode='cover' source={Cards[1].image}>
                  <Text style={styles.CardText}>{Cards[1].Title}</Text>
                </ImageBackground>
               </TouchableOpacity>
               <View style={styles.Cards}>
                <ImageBackground style={styles.ContentContainer} resizeMode='cover'  source={Cards[2].image}>
                  <Text style={styles.CardText}>{Cards[2].Title}</Text>
                </ImageBackground>
               </View>
               <TouchableOpacity style={styles.Cards}>
                <ImageBackground style={styles.ContentContainer} source={Cards[3].image}>
                  <Text style={styles.CardText}>{Cards[3].Title}</Text>
                </ImageBackground>
               </TouchableOpacity>
            </ScrollView>
        </View>
        <View style={styles.HeadingContainer}>
            <View style={styles.HeadingText}>
                <Text style={styles.Heading}>Collection</Text>
            </View>
            <TouchableOpacity style={styles.More}>
                <Text style={styles.MoreText}>View more</Text> 
            </TouchableOpacity>
        </View>
            <ScrollView horizontal={true} style={styles.HorizontalContainer}>
               <TouchableOpacity style={styles.Cards2}>
                <ImageBackground style={styles.ContentContainer1} resizeMode='cover' source={require('../../assets/images/photo-format-3.jpg')}>
                <Text style={styles.CardText1}>PORTRAIT
                PHOTOGRAPHY</Text>
                <View style={styles.imageRow}>
                   <Image source={require('../../assets/images/photo-format-4.jpg')} style={styles.image} />
                   <Image source={require('../../assets/images/K_b41GaWC5Y.png')} style={styles.image} />
                </View>
                </ImageBackground>
                <View style={styles.bottomText}>
                 <Text style={styles.aboutText}>70 photos</Text>
                </View>
               </TouchableOpacity>
               <TouchableOpacity style={styles.Cards2}>
                <ImageBackground style={styles.ContentContainer1} resizeMode='cover' source={require('../../assets/images/photo-format-3.jpg')}>
                <Text style={styles.CardText}>MUSIC VIDEO</Text>
                <View style={styles.imageRow}>
                   <Image source={require('../../assets/images/photo-format-4.jpg')} style={styles.image} />
                   <Image source={require('../../assets/images/K_b41GaWC5Y.png')} style={styles.image} />
                </View>
                </ImageBackground>
                <View style={styles.bottomText}>
                 <Text style={styles.aboutText}>10 videos</Text>
                </View>
               </TouchableOpacity>
               <TouchableOpacity style={styles.Cards2}>
                 <ImageBackground style={styles.ContentContainer1} resizeMode='cover' source={require('../../assets/images/photo-format-3.jpg')}>
                   <Text style={styles.CardText}>MUSIC VIDEO</Text>
                   <View style={styles.imageRow}>
                     <Image source={require('../../assets/images/photo-format-4.jpg')} style={styles.image} />
                     <Image source={require('../../assets/images/K_b41GaWC5Y.png')} style={styles.image} />
                   </View>
                 </ImageBackground>
                 <View style={styles.bottomText}>
                 <Text style={styles.aboutText}>10 videos</Text>
                </View>
               </TouchableOpacity>
               <TouchableOpacity style={styles.Cards2}>
                <ImageBackground style={styles.ContentContainer1} resizeMode='cover' source={require('../../assets/images/photo-format-3.jpg')}>
                <Text style={styles.CardText1}>PORTRAIT
                PHOTOGRAPHY</Text>
                <View style={styles.imageRow}>
                   <Image source={require('../../assets/images/photo-format-4.jpg')} style={styles.image} />
                   <Image source={require('../../assets/images/K_b41GaWC5Y.png')} style={styles.image} />
                </View>
                </ImageBackground>
                <View style={styles.bottomText}>
                 <Text style={styles.aboutText}>70 photos</Text>
                </View>
               </TouchableOpacity>
            </ScrollView>
            <View style={styles.HeadingContainer}>
            <View style={styles.HeadingText}>
                <Text style={styles.Heading}>Collection</Text>
            </View>
            <TouchableOpacity style={styles.More}>
                <Text style={styles.MoreText}>View more</Text> 
            </TouchableOpacity>
        </View>
            <ScrollView horizontal={true} style={styles.HorizontalContainer}>
               <TouchableOpacity style={styles.Cards2}>
                <ImageBackground style={styles.ContentContainer1} resizeMode='cover' source={require('../../assets/images/photo-format-3.jpg')}>
                <Text style={styles.CardText1}>PORTRAIT
                PHOTOGRAPHY</Text>
                <View style={styles.imageRow}>
                   <Image source={require('../../assets/images/photo-format-4.jpg')} style={styles.image} />
                   <Image source={require('../../assets/images/K_b41GaWC5Y.png')} style={styles.image} />
                </View>
                </ImageBackground>
                <View style={styles.bottomText}>
                 <Text style={styles.aboutText}>70 photos</Text>
                </View>
               </TouchableOpacity>
               <TouchableOpacity style={styles.Cards2}>
                <ImageBackground style={styles.ContentContainer1} resizeMode='cover' source={require('../../assets/images/photo-format-3.jpg')}>
                <Text style={styles.CardText}>MUSIC VIDEO</Text>
                <View style={styles.imageRow}>
                   <Image source={require('../../assets/images/photo-format-4.jpg')} style={styles.image} />
                   <Image source={require('../../assets/images/K_b41GaWC5Y.png')} style={styles.image} />
                </View>
                </ImageBackground>
                <View style={styles.bottomText}>
                 <Text style={styles.aboutText}>10 videos</Text>
                </View>
               </TouchableOpacity>
               <TouchableOpacity style={styles.Cards2}>
                 <ImageBackground style={styles.ContentContainer1} resizeMode='cover' source={require('../../assets/images/photo-format-3.jpg')}>
                   <Text style={styles.CardText}>MUSIC VIDEO</Text>
                   <View style={styles.imageRow}>
                     <Image source={require('../../assets/images/photo-format-4.jpg')} style={styles.image} />
                     <Image source={require('../../assets/images/K_b41GaWC5Y.png')} style={styles.image} />
                   </View>
                 </ImageBackground>
                 <View style={styles.bottomText}>
                 <Text style={styles.aboutText}>10 videos</Text>
                </View>
               </TouchableOpacity>
               <TouchableOpacity style={styles.Cards2}>
                <ImageBackground style={styles.ContentContainer1} resizeMode='cover' source={require('../../assets/images/photo-format-3.jpg')}>
                <Text style={styles.CardText1}>PORTRAIT
                PHOTOGRAPHY</Text>
                <View style={styles.imageRow}>
                   <Image source={require('../../assets/images/photo-format-4.jpg')} style={styles.image} />
                   <Image source={require('../../assets/images/K_b41GaWC5Y.png')} style={styles.image} />
                </View>
                </ImageBackground>
                <View style={styles.bottomText}>
                 <Text style={styles.aboutText}>70 photos</Text>
                </View>
               </TouchableOpacity>
            </ScrollView>
            
        </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#ffff'
    },
    Search:{
        backgroundColor:'#F3F5F7',
        borderRadius:30,
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        paddingVertical:8,
        paddingHorizontal:14,

    },
    input:{
        
        flex:1,
        
    },
    SearchIcon:{
        overflow:'hidden',

    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    HeadingContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:16
    },
    HeadingText:{

    },
    Heading:{
        fontFamily:'Poppins',
        fontSize:20,
        fontWeight:700,
        lineHeight:(1.2*20),
        color:'#212121',
        marginLeft:10
    },
    More:{
        paddingTop:7,
        paddingBottom:8,
        paddingHorizontal:10
    },
    MoreText:{
       fontFamily:'Poppins',
       fontWeight:500,
       fontSize:14,
       lineHeight:(1.5*14), 
       color:'#888BF4'
    },
    HorizontalContainer:{
        gap:14,
        paddingLeft:10

    },
    Cards:{
        width:150,
        height:100,
        marginRight:14
    },
    ContentContainer:{
        width:'100%',
        height:'100%',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        overflow:"hidden"
    },
    CardText:{
        fontFamily:'Poppins',
        fontSize:14,
        fontWeight:700,
        lineHeight:(1.2*14),
        color:'#FFFFFF',
        alignSelf:'center'

    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'baseline'
    },
    image:{
        width:79,
        height:79,
    },
    Cards2:{
        width:158,
        marginRight:14
    },
    ContentContainer1:{
        width:'100%',
        height:158,
        borderRadius:10,
        justifyContent:"flex-end",
        overflow:"hidden",
    },
    CardText1:{
        fontFamily:'Poppins',
        fontSize:14,
        fontWeight:700,
        lineHeight:(1.2*14),
        color:'#FFFFFF',
        alignSelf:'center',
        textAlign:'center',
        position:'relative',
        bottom:-20,
        zIndex:1
    },
    aboutText:{
        color:'#828282',
        fontFamily:'Poppins',
        fontSize:14,
        fontWeight:500,
        lineHeight:(1.5*14)

    },
    bottomText:{
        width:'100%'
    }

})