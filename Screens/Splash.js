import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from "@react-navigation/native"

const Splash = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("MainScreen")
        }, 3000);
    }, [])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>Splash</Text>
        </View>
    )
}

export default Splash