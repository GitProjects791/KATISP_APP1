import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Screens/Home";

import { Ionicons } from '@expo/vector-icons';

function StackNav ( { navigation }) {
    console.log(navigation.toggleDrawer);

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerLeft: () => { return <Ionicons name="reorder-three-outline" size={30} onPress={() => {navigation.toggleDrawer()}} /> }}} initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen name="Details" component={Details} /> */}
        </Stack.Navigator>
    )
}

export default StackNav;