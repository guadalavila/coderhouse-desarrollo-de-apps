import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/DashboardScreen";
import DetailCategoryScreen from "../screens/DetailCategoryScreen";
import { customHeader } from "../utils/styles";

const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={DashboardScreen} options={{ title: 'Categorias', ...customHeader}}   />
                <Stack.Screen name="DetailCategoryScreen" component={DetailCategoryScreen} options={{title: '', ...customHeader}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;

const styles = StyleSheet.create({});
