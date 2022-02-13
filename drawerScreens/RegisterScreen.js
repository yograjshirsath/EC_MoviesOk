import React, {useState, createRef} from 'react';
import {StyleSheet,TextInput,View,Text,Image,KeyboardAvoidingView,Keyboard,TouchableOpacity,ScrollView, Alert} from 'react-native';
 import { connect} from 'react-redux';
 import { addUser } from '../actions/user';
// import { createStore } from 'redux';
// import authReducer from '../redux/reducer/authReducer';
import Loader from '../Components/Loader';
//import { saveUserLoginData } from '../redux/actions/authActions';
//import { useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen';

const RegisterScreen = (props,{navigation}) => {
 // const navigation=useNavigation()
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess,setIsRegistraionSuccess] = useState(false);
  const nameInputRef = createRef();
  const emailInputRef = createRef();
  const ConfirmPasswordInputRef = createRef();
  const PhoneNumberInputRef = createRef();
  const passwordInputRef = createRef();
  const handleSubmitButton = (props,{navigation}) => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userConfirmPassword) {
      alert('Please fill ConfirmPassword');
      return;
    }
    if (!userPhoneNumber) {
      alert('Please fill PhoneNumber');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    if (userPassword!==userConfirmPassword) {
      alert('Password and confirm password are not matching');
      return;
    }
    
    
    setLoading(false);
   
    var dataToSend = {
      name: userName,
      email: userEmail,
      ConfirmPassword: userConfirmPassword,
      PhoneNumber: userPhoneNumber,
      password: userPassword,
    };
    
    let already=props.userData.find(user=>user.email===userEmail)
    if(already)(
      alert("USER ALREADY EXISTS") 
      )   
    else{ 
      props.addUser(dataToSend)
      alert("User Register Successful")
      {()=>props.navigation.navigate(LoginScreen)}
    }
    
 
  }
  return <View>
      <Loader loading={loading} />
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                ConfirmPasswordInputRef.current &&
                ConfirmPasswordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserConfirmPassword) => setUserConfirmPassword(UserConfirmPassword)}
              underlineColorAndroid="#f000"
              placeholder="Confirm Password"
              placeholderTextColor="#8b9cb5"
              ref={ConfirmPasswordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                addressInputRef.current &&
                addressInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPhoneNumber) =>
                setUserPhoneNumber(UserPhoneNumber)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter PhoneNumber"
              placeholderTextColor="#8b9cb5"
                keyboardType="numeric"  
              ref={PhoneNumberInputRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={()=>handleSubmitButton(props,{navigation })}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        
    </View>
  
};
//export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#000000',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});

const mapStateToProps=(state)=>{
  return{
    userData:state.user.userList,
  }
}

const mapDispatchToProps=(dispatch)=>{
  console.log("HERE===>")
  return{
    addUser :(dataToSend)=>dispatch(addUser(dataToSend))
  }
 }

export default connect(mapStateToProps,mapDispatchToProps)(RegisterScreen);

