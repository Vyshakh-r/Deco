import { View, Text,StatusBar,StyleSheet, TouchableOpacity, ImageBackground,Image,ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchInput from '../Components/SearchInput'


export default function SearchPage() {
  return (
    
    <SafeAreaView style={styles.Container}>
      
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <SearchInput/>
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.cardsContainer}>
     
       <TouchableOpacity style={styles.Cards}>
        <ImageBackground style={styles.CardBg} source={require('../../assets/images/cardBg.png') } resizeMode='cover'>
          <Image
           source={require('../../assets/images/mj2NwYH3wBA.png')}
           style={styles.cardImage}
           />
            <View style={styles.TextContainer}>
             <Text style={styles.centerText}>PHOTOGRAPHY</Text>
            </View>
        </ImageBackground>
       </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
     
       <TouchableOpacity style={styles.Cards}>
        <ImageBackground style={styles.CardBg} source={require('../../assets/images/cardBg.png') } resizeMode='cover'>
          <Image
           source={require('../../assets/images/CdmpFw9vrX0.png')}
           style={styles.cardImage}
           />
            <View style={styles.TextContainer}>
             <Text style={styles.centerText}>IILUSTRATION</Text>
            </View>
        </ImageBackground>
       </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
     
     <TouchableOpacity style={styles.Cards}>
      <ImageBackground style={styles.CardBg} source={require('../../assets/images/cardBg.png') } resizeMode='cover'>
        <Image
         source={require('../../assets/images/Card4.png')}
         style={styles.cardImage}
         />
          <View style={styles.TextContainer}>
           <Text style={styles.centerText}>DESIGN</Text>
          </View>
      </ImageBackground>
     </TouchableOpacity>
    </View>
    <View style={styles.cardsContainer}>
     
     <TouchableOpacity style={styles.Cards}>
      <ImageBackground style={styles.CardBg} source={require('../../assets/images/cardBg.png') } resizeMode='cover'>
        <Image
         source={require('../../assets/images/Card5.png')}
         style={styles.cardImage}
         />
          <View style={styles.TextContainer}>
           <Text style={styles.centerText}>MAKING VIDEO</Text>
          </View>
      </ImageBackground>
     </TouchableOpacity>
    </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
    Container:{
      flex:1,
      backgroundColor:'#FFFFF',
    },
    cardsContainer:{
      paddingHorizontal:20,
      backgroundColor: 'transparent',
      height:150,
    },
    CardBg:{
      width:'100%',
      height:'100%',
      borderRadius:10,
      overflow:'hidden',
      zIndex:1,

    },
    Cards:{
      zIndex:3,
      marginBottom:16

    },
    cardImage:{
      zIndex:-2,
      width:'100%',
      height:'100%',
    },
    TextContainer:{
      position:'absolute',
      paddingHorizontal:20,
      top:'45%',
      justifyContent:'flex-end'
    },
    centerText:{
      fontFamily:'Poppins',
      fontSize:20,
      fontWeight:700,
      color:'#FFFFFF',
      textAlign:'center'
      
    },
    scrollContainer:{
      gap:16
    }
})