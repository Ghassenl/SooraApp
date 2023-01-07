import { useFonts } from "expo-font";
import MainScreen from "./screens/MainScreen";

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter: require("./assets/fonts/Inter.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MainScreen />
  );
};

export default App;
