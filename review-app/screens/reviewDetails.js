import React from "react";
import { StyleSheet , View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails(){
    return(
        <View style={globalStyles.container}>
            <Text>Review Details</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding: 24
    }
})