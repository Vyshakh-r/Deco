import { View, Text,StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import SearchIcon from '../../assets/images/icons/active-Search.svg';
import SendIcon from '../../assets/images/icons/send.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Search() {
  const router = useRouter();
  return (
    <View style={styles.SearchContainer}>
     
        <TouchableOpacity style={styles.search} onPress={()=> router.navigate('/screens/SearchPage')}>
            <SearchIcon/>
            <Text style={styles.placeholder}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.send}>
            <SendIcon/>
        </TouchableOpacity>
    
     </View>
  )
}
const styles = StyleSheet.create({
      SearchContainer:{
        width:'100%',
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        paddingHorizontal:20,
        paddingVertical:12,
        gap:16,
      },
      search:{
        flexDirection:'row',
        backgroundColor:'#F3F5F7',
        paddingVertical:8,
        paddingHorizontal:14,
        gap:6,
        borderRadius:30,
        flex:1
      },
      placeholder:{
        fontFamily:'Poppins',
        fontSize:14,
        fontWeight:500,
        lineHeight:(1.5*14),
        color:'#BDBDBD'
      },
      send:{
        backgroundColor:'#F6F7F9',
        borderRadius:20,
        padding:6,
        width:36,
        height:36
      }

})