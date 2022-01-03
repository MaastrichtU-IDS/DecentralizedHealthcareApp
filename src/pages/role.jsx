import React from "react";

import {
    Text,
    TouchableOpacity,
    View
} from "react-native";

import styles from "../utils/style-sheet";

function RolePage(
    {
        navigation
    }
) {
    return (
        <View
            style={
                styles.container
            }>

            <TouchableOpacity
                style={
                    styles.touchableOpacityStyle
                }

                onPress={
                    () => {
                        navigation.navigate("Provide dataset")
                    }
                }>

                <Text
                    style={
                        {
                            color: '#fff',
                            textAlign: "center"
                        }
                    }
                >
                    Provide data
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={
                    styles.touchableOpacityStyle
                }
                onPress={
                    () => navigation.navigate("Request dataset")
                }>

                <Text
                    style={
                        {
                            color: '#fff',
                            textAlign: "center"
                        }
                    }
                >
                    Request data
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default RolePage;