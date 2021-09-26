import React from "react";
import {View,Text,ImageBackground} from 'react-native'
import StylesButton from "../StylesButton";
import styles from "./styles";

const CarItem = (props) => {

    const {name,tagline, image,taglineCTA} = props.car

   
    return (
        <View style={styles.carContainer}>

        <ImageBackground 
        source={image}
        style={styles.imagee}
        />

          <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subTitles}>{tagline}{' '}
            <Text style={styles.subTitlesCta}>{taglineCTA}</Text>
            </Text>
           
          </View>

        <View style={styles.buttonContainer}> 
        <StylesButton type="primary" 
          content={"Custom order"}
          onPress={()=>{

          }}/>
        <StylesButton type="secondary" 
          content={"existing inventory"}
          onPress={()=>{
            
          }}/>
        </View>
      </View>
    )
}

export default CarItem;