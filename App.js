import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import RootNavigation from "./navigation/RootNavigation";

const queryClient = new QueryClient();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Quicksand-Regular": require("./assets/fonts/Quicksand/static/Quicksand-Regular.ttf"),
    "Quicksand-Bold": require("./assets/fonts/Quicksand/static/Quicksand-Bold.ttf"),
    "Quicksand-Medium": require("./assets/fonts/Quicksand/static/Quicksand-Medium.ttf"),
    "Quicksand-Light": require("./assets/fonts/Quicksand/static/Quicksand-Light.ttf"),
    "Quicksand-SemiBold": require("./assets/fonts/Quicksand/static/Quicksand-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <RootNavigation />
        <StatusBar style="light" backgroundColor="#0f0f0f" />
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
