import React from "react";
import {View,Text, Pressable} from 'react-native'
import styles from "./stylesButton";

const StylesButton = (props) => {

    const {type,content,onPress} = props
    const backgroundcolor = type === 'primary' ? '#171A20CC' : 'white'
    const fontcolor = type === 'primary' ? '#FFFFFF' : '#171A20CC' 

    return (
      <View style={styles.container}>
        <Pressable
          style={[styles.buttonStyle , {backgroundColor:backgroundcolor}]}
          onPress={()=>{
              
          }}
        >
         <Text style={[styles.textstyle, {color:fontcolor}]}>{content}</Text>
        </Pressable>

      </View>
    )
}

export default StylesButton;