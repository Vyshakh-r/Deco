import React, { useState } from 'react';
import { TextInput, StyleSheet, View,Text,TouchableOpacity,Keyboard } from 'react-native';
import SearchIcon from '../../assets/images/icons/active-Search.svg';

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');

  const  cancel=()=>{
    isFocused==false
  }

  return (
    <View style={styles.Container}>
    <View style={[styles.inputContainer, isFocused && styles.inputFocused]}>
      <SearchIcon/>
      <TextInput
        placeholder="Type something"
        style={styles.input}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
    <TouchableOpacity style={styles.Cancel} onPress={()=>{
          setSearchText('');
          setIsFocused(false); // Reset border style
          Keyboard.dismiss();  // Optional: Close keyboard
    }}>
      <Text style={styles.cancelText}>Cancel</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container:{
    paddingHorizontal:20,
    marginBottom:16,
    flexDirection:'row',
    alignItems:'center'
  },
  inputContainer: {
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection:'row',
    alignItems:'center',
    flex:1
  },
  inputFocused: {
    borderColor: '#5151C6', //active color
    borderWidth: 2,
    borderRadius:30
  },
  input: {
   
  },
  Cancel:{
    paddingHorizontal:10,
    paddingVertical:5
  },
  cancelText:{
    fontFamily:'Poppins',
    fontSize:14,
    color:'#333333'
  }
});

export default SearchInput;
