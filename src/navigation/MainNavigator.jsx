import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigatorLogged from "./tabs/TabNavigatorLogged";
import AuthStack from "./stacks/auth";
import { useSelector } from 'react-redux'

const Stack = createNativeStackNavigator();

function MainNavigator() {
    const {user} = useSelector(state => state.auth.value)

    return (
        <NavigationContainer>
            {!user.email ? <TabNavigatorLogged /> : <AuthStack />}
        </NavigationContainer>
    );
}

export default MainNavigator;

