import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";
import { View, StyleSheet } from "react-native";

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <RootNavigator />
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
});

