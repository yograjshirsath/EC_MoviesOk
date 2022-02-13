import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { Divider } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';

const ProfileScreen = (props) => {
 return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
      <Text
          style={{
            fontSize: 28,
            textAlign: 'center',
            color: 'grey'
          }}>
          Your Profile
        </Text>
        <Divider/>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'left',
              marginBottom: 16,
              marginTop:10
            }}>
            NAME : {props.authData.userData[0].name}
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'left',
              marginBottom: 16
            }}>
            EMAIL: {props.authData.userData[0].email}
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'left',
              marginBottom: 16
            }}>
            MOBILE : {props.authData.userData[0].PhoneNumber}
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'left',
              marginBottom: 16
            }}>
            PASSWORD : ********
          </Text>

     </View>
    </SafeAreaView>
  );
}


const mapStateToProps=(state)=>{
  return{
    authData:state.auth
  }
}


export default connect(mapStateToProps)(ProfileScreen);