import React from "react";
import {View, Text,StyleSheet, Button} from "react-native";


function ShopScreen ({navigation}){
    const styles= StyleSheet.create({
        container:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }
    })
    const onReturnHome = ()=>{
        navigation.navigate('Home')
    }
    return(
        <View style={styles.container}>
            <Text>Ici c'est la Boutique</Text>
            <Button
                onPress={()=>{onReturnHome()}}
                title="Revenir a l'accueil"/>
        </View>
    )
}export default ShopScreen;