import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";
import { StyleSheet } from "react-native";
import MenuFetch from "../screens/MenuFetch";
import SettingsScreen from "../screens/SettingsScreen";
import CustomersScreen from "../screens/CustomersScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Subscribe" component={SubscribeScreen} />
                <Stack.Screen name="Menu" component={MenuFetch} />
                <Stack.Screen name="Customers" component={CustomersScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </>
    );
};

export default RootNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
});

