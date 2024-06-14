import Startup from "./startup";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabLayout from "./(tabs)/layout";
import ViewCrypto from "./view";
import Convert from "./convert";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Startup" component={Startup} options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" component={TabLayout} options={{ headerShown: false }} />
        <Stack.Screen name="View" component={ViewCrypto} options={{ headerShown: false }} />
        <Stack.Screen name="Convert" component={Convert} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
