import { Button, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    button:{
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.colors.primary,
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
    },
    textButton:{
        fontSize:14,
        color:'#000000ff',
        fontWeight:'bold',
    },
    textBottom:{
        fontSize:16,
    },
    
})