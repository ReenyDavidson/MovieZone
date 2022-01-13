import { StyleSheet, ScrollView } from "react-native";
import GetNowPlaying from "../../components/NowPlaying/GetNowPlaying";
import GetPopular from "../../components/Popular/GetPopular";
import GetTrending from "../../components/Trending/GetTrending";
import GetUpcoming from "../../components/Upcoming/GetUpcoming";

export default function FilmTab() {
  return (
    <ScrollView style={styles.container}>
      <GetNowPlaying />
      <GetPopular />
      <GetTrending />
      <GetUpcoming />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
});
