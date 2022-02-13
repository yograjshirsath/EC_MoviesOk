import {React,useState} from 'react';
import {View, Image, StyleSheet , Text,TouchableOpacity} from 'react-native';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Overlay, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
//import { MovieDetail } from '../drawerScreens/MovieDetail';
const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  const [visible, setVisible] = useState(false);
  const [movieVisible,setMovieVisible]=useState(true)
const [movieName,setMovieName]=useState(null);
const [movieDetails,setMovieDetails]=useState();
const [movieDataLoading,setMovieDataLoading]=useState(true);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
 

  const handleSearchMovie=()=>{
   fetch('https://api.themoviedb.org/3/search/movie?api_key=e603a8964f5ab38471183720fa598ee6&language=en-US&query='+movieName+'&page=1&include_adult=false')
   .then((response) => response.json())
   .then((json) => setMovieDetails(json))
   .catch((error) => console.error(error))
   .finally(() => setMovieDataLoading(false));
   setVisible(!visible);
   
  console.log(movieDetails)  
}

 const handleMovieName=(moviename)=>{
   setMovieName(moviename)
 }
  return (
    <View style={{flexDirection: 'row'}}>
        <View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
       
        <Text style={styles.textSecondary}>
          <b>Search For Movie</b>
        </Text>
        <label>
    Name:   <input type="text" name="name" style={{margin:10,marginBottom:10}} onChange={(event) => handleMovieName(event.target.value)}/>
      </label>
      <b>
          <Button
          title="Search"
          onPress={handleSearchMovie}  
          />
        </b>
      </Overlay>
    </View>
      <TouchableOpacity onPress={toggleDrawer}>
       <MenuIcon style={{color:"white",paddingLeft:15}} fontSize='large'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleOverlay}>
      { props.authData.isAuth  && <SearchIcon 
         fontSize='large' style={{justifyContent:'flex-end',paddingLeft:20,color:"white"}}/>      
      } 
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
});


const mapStateToProps=(state)=>{
  return{
    authData:state.auth
  }
}


export default connect(mapStateToProps)(NavigationDrawerHeader);
