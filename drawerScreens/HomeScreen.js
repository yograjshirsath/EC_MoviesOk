import {React,useState,useEffect } from 'react';
import {View, Text, SafeAreaView, ViewBase,ActivityIndicator} from 'react-native';
import {  Card, Button, Icon } from 'react-native-elements';
import { Divider } from 'react-native-elements/dist/divider/Divider';

const HomeScreen = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [isTrendingLoading, setTrendingLoading] = useState(true);
  const [isPopularLoading, setPopularLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=e603a8964f5ab38471183720fa598ee6')
      .then((response) => response.json())
      .then((json) => setTrending(json))
      .catch((error) => console.error(error))
      .finally(() => setTrendingLoading(false));

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=e603a8964f5ab38471183720fa598ee6&language=en-US&page=1')
      .then((response) => response.json())
      .then((json) => setPopular(json))
      .catch((error) => console.error(error))
      .finally(() => setPopularLoading(false));

    }, []);
  const views=[];
 const trendingMovies=()=>{
  return <View>
  {isTrendingLoading ? '': 
  trending.results.map((movie,index) =>{
   return <View>
    <Card>
    <Card.Title>{movie.original_title}</Card.Title>
    <Card.Divider />
    <Card.Image
      style={{ padding: 0 }}
      source={{
        uri:
          'https://image.tmdb.org/t/p/w500'+movie.poster_path,
      }}
    />
    <Text style={{ marginBottom: 10 }}>
    <b>POPULARITY</b>     {movie.popularity}
    </Text>
    <Text style={{ marginBottom: 10 }}>
    <b>RATINING</b>     {movie.vote_average}
    </Text>

    <Button

      buttonStyle={{
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: '-7px',
        marginTop: '-7px',
      }}
      title="VIEW DETAILS"
    />
  </Card>
  </View>
    })}
  </View>
}

const popularMovies=()=>{
  console.log(trending)
  console.log(popular)
  return <View>
  {isPopularLoading ? '': 
  popular.results.map((movies,id) =>{
   return <View>
    <Card>
    <Card.Title>{movies.original_title}</Card.Title>
    <Card.Divider />
    <Card.Image
      style={{ padding: 0 }}
      source={{
        uri:
          'https://image.tmdb.org/t/p/w500'+movies.poster_path,
      }}
    />
    <Text style={{ marginBottom: 10 ,marginTop:10}}>
    <b>POPULARITY</b>     {movies.popularity}
    </Text>
    <Text style={{ marginBottom: 10 }}>
    <b>RATINING</b>     {movies.vote_average}
    </Text>

    <Button

      buttonStyle={{
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: '-7px',
        marginTop: '-7px',
      }}
      title="VIEW DETAILS"
    />
  </Card>
  </View>
    })}
  </View>
}

return<SafeAreaView style={{flex: 1}}>
  <View >
  <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'18px',paddingTop:'8px',fontVariant:'small-caps'}}>NOW TRENDING</Text>
  {isTrendingLoading ? <ActivityIndicator size="large" color="#00ff00" /> : trendingMovies()}
  <Divider style={{paddingTop:8}}/>
  <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'18px',paddingTop:'8px',fontVariant:'small-caps'}}>MOST POPULAR</Text>
  {isPopularLoading ? <ActivityIndicator size="large" color="#00ff00" /> : popularMovies()} 
  </View>
  </SafeAreaView>
};

export default HomeScreen;









