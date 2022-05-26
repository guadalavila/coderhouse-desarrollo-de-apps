import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigatorLogged from "./tabs/TabNavigatorLogged";

const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <NavigationContainer>
            <TabNavigatorLogged />
        </NavigationContainer>
    );
}

export default MainNavigator;

