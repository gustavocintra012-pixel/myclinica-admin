import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";



export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:30
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    boxMid:{
        height:Dimensions.get('window').height/6,
        width:'100%',
        paddingHorizontal:20,
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        width:200,
        height:200
    },
    text:{
        fontWeight:'bold',
        marginTop:30,
        fontSize:40,
        textAlign: "center", 
    },
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
    }
})