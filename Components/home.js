import React, {useState, useEffect} from "react";
import {Text, View,StyleSheet,Image,TextInput,FlatList,SafeAreaView} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker,Callout} from 'react-native-maps';
import  {markers} from "../Api/mapData";
import {Dimensions, Platform,} from "react-native-web";
import {Ionicons} from "@expo/vector-icons";
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import "react-native-gesture-handler"
import Card from "./card";

const {width, height}= Dimensions.get('window')
const  CARD_HEIGHT = 220
const CARD_WIDTH =width *0.8

const styles = StyleSheet.create({
    map: {
        height: '100%',
    },
    container:{
        flex:1,

    },
    searchBox:{
      position:'absolute',
      marginTop: Platform.OS === 'ios'? 40:40,
      flexDirection: 'row',
      backgroundColor:"#fff",
      width: "90%",
      alignSelf:'center',
      borderRadius: 5,
      padding: 5,
      shadowColor:'#ccc',
      shadowOffset: {width:0, height:3},
        shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation:10,

    },
    cardImage:{
        flex :3,
        width:"100%",
        height:"100%",
        alignSelf:'center'
    },
    card:{
      elevation: 2,
      backgroundColor: "#fff",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      marginHorizontal: 10,
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowOffset: {x:2, y:-2},
      overflow:'hidden',
      height :CARD_HEIGHT ,
      width : CARD_WIDTH,
    },
    texContent:{
        flex: 2,
        padding: 10,
    },
    cardTitle :{
      fontSize: 12,
      fontWeight:'bold',
    },
    cardDescription :{
      fontSize:12,
      color:'#444'  ,
    },

    bubble: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150,
    },
    arrow:{
        backgroundColor:'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf:'center',
        marginTop: -32,
    },
    arrowBorder:{
        backgroundColor:'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf:'center',
        marginTop: -0.5,
    },
    name:{
        fontSize:16,
        marginBottom:5,
    },
    image: {
        width: 50,
        height: 50,
    },
});
const CardView = ()=>{

}

export default function Home() {
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const [error, setError] = useState(null)
    const sheetRef = React.useRef(null);

    const onCardPress =()=>{

    }

    const CardView = ()=>{
        const renderItem =({item})=>{
            return(
                    <Card image={item.image} title={item.title} description={item.description} secondDescription={item.secondDescription} />
                )
             }
        return(
            <SafeAreaView>
                <FlatList
                    data={markers}
                    keyExtractor={item => item.title}
                    renderItem={renderItem}
                />
            </SafeAreaView>

        )
    }

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            position => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            },
            error=>{
                setError(error.message)
            },
            {enableHighAccuracy:true, timeout: 20000,maximumAge:2000}
        );
    },[])

    const initialMapState ={
        markers,
        region :{
            latitude :longitude,
            longitude :latitude,
            latitudeDelta :0.015,
            longitudeDelta :0.0120,
        },


    }
    const [state, setState] =useState(initialMapState)
    const  _map = React.useRef(null)
    const  _scrollView = React.useRef(null)
    const onSubmitText=()=>{
        sheetRef.current.snapTo(0);
    }

        return (
            <View style={styles.container}>
                <MapView
                    ref={_map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={state.region}
                    style={styles.map}
                >
                    <Marker coordinate={{latitude :latitude,longitude: longitude}
                    }

                    image={require('../assets/map+marker+icon-1320166582858325800_32.png')}
                    title="testApp"
                        >
                        </Marker>

                </MapView>
                <View style={styles.searchBox}>
                    <Ionicons name="menu" size={20} style={{marginHorizontal: 5}}/>
                    <TextInput
                    placeholder="Rechercher"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    style={{flex:1, padding:0
                    }}
                    onSubmitEditing={()=>{onSubmitText()}}/>
                    <Ionicons name="ios-search" size={20} style={{marginHorizontal: 5}}/>
                </View>
                <BottomSheet
                    ref={sheetRef}
                    snapPoints={[450, 300, 0]}
                    borderRadius={10}
                    renderContent={CardView}
                    bottomSheerColor="#FFFFFF"
                    initialPosition={"50%"}  //200, 300
                    isBackDrop={true}
                    isBackDropDismisByPress={true}
                    isRoundBorderWithTipHeader={true}
                    containerStyle={{backgroundColor:"white", alignItems:'center', justifyContent:'center'}}

                />
        </View>

        );

}