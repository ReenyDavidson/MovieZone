import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigationState } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function NowPlayingDetailScreen() {
  const navigation = useNavigationState((state) => state);
  const item = navigation.routes[navigation.routes.length - 1].params;
  console.log(item);
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "100%",
          height: "50%",
          borderRadius: 10,
        }}
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
      />
      <LinearGradient colors={["transparent", "#000", "#fff"]} style={styles.gradient}>
        <View style={styles.info_container}>
          <Text style={styles.original_title}>{item.original_title}</Text>
          <View style={styles.vote_container}>
            <Text style={styles.vote_average}>{item.vote_average}/10</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
  gradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
