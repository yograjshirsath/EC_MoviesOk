import React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

const heading=(props)=>{
  return(
    <View style={stylesSidebar.sideMenuContainer}>
    <View style={stylesSidebar.profileHeader}>
      <View style={stylesSidebar.profileHeaderPicCircle}>
        <Text style={{fontSize: 25, color: '#307ecc'}}>
          {'Yuest'.charAt(0)}
        </Text>
      </View>
      <Text style={stylesSidebar.profileHeaderText}>
        Hello Yograj
      </Text>
    </View>
    <View style={stylesSidebar.profileHeaderLine} />

    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  </View>
  );

}
const CustomSidebarMenu = (props) => {
 
  return heading 
      
  
};


const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fc9d03',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#307ecc',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});


const mapStateToProps=(state)=>{
  return{
    authData:state.auth
  }
}
connect(mapStateToProps)(heading);
export default (CustomSidebarMenu);
