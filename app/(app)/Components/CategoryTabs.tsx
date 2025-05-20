import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";
import Popularscreen from "../../(tabs)/PopularTab";
import Trendscreen from "../../(tabs)/Trend";
import Followingscreen from "../../(tabs)/Following";
import { Text, View, StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();
const {width} = Dimensions.get('window')

export default function TopSliderTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarLabel: ({ focused }) => (
          <View style={[focused ? styles.activeTab : styles.inactiveTab,{width: width/3}]}>
            <Text style={[styles.label, { color: focused ? "#888BF4" : "#BDBDBD",fontWeight: focused? 700 : 500 }]}>
              {route.name}
            </Text>
          </View>
        ),
        tabBarStyle: styles.tabbar,
        tabBarIndicatorStyle: { height: 0 },
        tabBarPressColor: 'transparent'

        
      })}
    >
      <Tab.Screen name="Popular" component={Popularscreen} />
      <Tab.Screen name="Trending" component={Trendscreen} />
      <Tab.Screen name="Following" component={Followingscreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    paddingVertical:6,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  label: {
    fontSize: 16,
    fontFamily: "Poppins",
    letterSpacing: -0.1,
    alignSelf:'center'
  },
  activeTab: {
    backgroundColor: "#F1F1FE",
    borderRadius: 6,
    paddingHorizontal: 4,
    paddingVertical: 10,
    
  },
  inactiveTab: {
    backgroundColor: "transparent",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRightColor:'blue'
  },
});
