import { StyleSheet, View } from "react-native";
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
    backgroundColor: "#3f51b5",
  },
});
