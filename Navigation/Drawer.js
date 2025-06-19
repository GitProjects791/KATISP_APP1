import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import StackNav from "./Stack";

import { Ionicons } from '@expo/vector-icons';
function DrawerNav() {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Stack">
                <Drawer.Screen name="Stack" component={StackNav} />
                {/* <Drawer.Screen name="Details" component={Details} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default DrawerNav;