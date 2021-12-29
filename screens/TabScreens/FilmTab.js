import { StyleSheet, View } from "react-native";
import NowPlaying from "../../components/NowPlaying/NowPlaying";

export default function FilmTab() {
  return (
    <View style={styles.container}>
      <NowPlaying />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f51b5",
  },
});
