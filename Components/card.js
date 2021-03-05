import React from 'react'
import {Image, Text, View,TouchableOpacity,StyleSheet} from "react-native";

const styles=StyleSheet.create({
    cardImage:{
        flex :3,
        width:"100%",
        height:"100%",
        alignSelf:'center'
    },
    card:{
        flexDirection:'row',
        elevation: 2,
        backgroundColor: "#fff",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: {x:2, y:-2},
        overflow:'hidden',
        height : 150 ,
        width : "80%",
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
})
function Card({image, title, description, secondDescription, onCardPress}) {
    return(
        <TouchableOpacity onPress={onCardPress} style={styles.card} >
            <Image
                source={image}
                style={styles.cardImage}
                resizeMode='cover' />
                <View style={styles.textContent}>
                    <Text numberOfLines={1} style={styles.cardTitle} >{title}</Text>
                    <Text numberOfLines={1} style={styles.description} >{description}</Text>
                    <Text numberOfLines={1} style={styles.description} >{secondDescription}</Text>
                </View>

        </TouchableOpacity>
    )
}export default Card;