import React from "react";
import Onboarding from 'react-native-onboarding-swiper';
import {Image,Text, StyleSheet,Button,TouchableOpacity,View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Skip =({ ...props})=>{
   return (
       <TouchableOpacity style={{ position: 'relative'}} >
           <Text
               style={{textTransform: 'capitalize', paddingStart: 10}}
               { ...props}
           > Skip</Text>
       </TouchableOpacity>
       )
};
const Dots =({selected})=>{
   let backgroundColor = selected ? 'rgba(0,0,255,0.9)': 'rgba(0,0,255,0.2)';
   let width = selected ? 25 : 5;
   return(
       <View style={{
           width,
           height:5,
           marginHorizontal:3,
           backgroundColor,
           borderRadius: 5
       } }/>
   )
};
const Back =({ ...props})=>{
    return (
        <TouchableOpacity style={{ position: 'relative'}} >
            <Text
                style={{textTransform: 'capitalize', paddingStart: 10}}
                { ...props}
            > Back</Text>
        </TouchableOpacity>
    )
};

const Next =({ ...props})=>{
    return (
        <Text style={{marginRight: 20, borderRadius: 50, color: 'blue', backgroundColor:'blue', padding:10} }
              { ...props}
        >
            <Icon
                name="arrow-right"
                size={15}
                color="white"
                { ...props}
            />
        </Text>

    )
};


function OnBoardingScreen({navigation}) {
    const styles = StyleSheet.create({
        text: {
            position: 'absolute',
            fontSize:40,
            fontWeight:'bold',
            color: 'blue',
            alignItems:'center',
            marginRight :'auto',
            marginLeft :'auto',
            paddingTop:150,
            textTransform: 'capitalize',
        },
        Image :{
            height:200,
            width:"60%",
            borderRadius: 5,
            marginBottom: 30,
        }
    });

    return(

            <Onboarding
                onDone={()=> navigation.navigate('Home')}
                onSkip={() => navigation.navigate('Home')}
                SkipButtonComponent={Skip}
                NextButtonComponent={Next}
                DoneButtonComponent={Next}
                DotComponent={Dots}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image  source={require('../assets/projetTest.png')} style={styles.Image} />,
                        title: <Text style={styles.text}>Find the food you want</Text>,
                        subtitle: 'Our app helps you find the right food for every mood, any time & any day.',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../assets/projetTest2.png')} style={styles.Image}/>,
                        title: <Text style={styles.text}> We’ll have it delivered</Text>,
                        subtitle: 'Our hassle free delivery service is world class and will have your order delivered to any address of your specification.',
                    },
                ]}
            />

        
    );

}export default OnBoardingScreen