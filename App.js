import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import RootNavigation from "./navigation/RootNavigation";

const queryClient = new QueryClient();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Gluten-Regular": require("./assets/fonts/Gluten/static/Gluten-Regular.ttf"),
    "Gluten-Bold": require("./assets/fonts/Gluten/static/Gluten-Bold.ttf"),
    "Gluten-Medium": require("./assets/fonts/Gluten/static/Gluten-Medium.ttf"),
    "Gluten-Light": require("./assets/fonts/Gluten/static/Gluten-Light.ttf"),
    "Gluten-SemiBold": require("./assets/fonts/Gluten/static/Gluten-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <RootNavigation />
        <StatusBar style="auto" />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
});
