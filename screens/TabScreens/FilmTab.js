import { StyleSheet, View, Text } from "react-native";
import GetNowPlaying from "../../components/NowPlaying/GetNowPlaying";

export default function FilmTab() {
  return (
    <View style={styles.container}>
      <GetNowPlaying />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
});
