
import { createStackNavigator } from "@react-navigation/stack";
import  { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Details from "./screens/Details";


const Stack = createStackNavigator();


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}


const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-MediumBold.ttf"),
    InterRegular: require("./assets/fonts/Inter-RegularBold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf")

  });
  if(!loaded) return null;
  return (
    <NavigationContainer>
      <StackNavigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
      </StackNavigator>
    </NavigationContainer>
  );
}

export default App;
