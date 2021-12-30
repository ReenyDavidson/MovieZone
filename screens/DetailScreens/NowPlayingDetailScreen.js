import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { useNavigationState } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function NowPlayingDetailScreen() {
  const navigation = useNavigationState((state) => state);
  const item = navigation.routes[navigation.routes.length - 1].params;
  console.log(item);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          width: "100%",
          height: "60%",
        }}
        imageStyle={{ resizeMode: "contain", top: -15 }}
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }}
      >
        <LinearGradient colors={["transparent", "#0f0f0f"]} style={styles.gradient}>
          <View>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.poster}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.info_container}>
        <Text style={styles.original_title}>{item.original_title}</Text>

        <View style={styles.genre_container}>
          <View style={styles.genres}>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "Gluten-Regular",
              }}
            >
              Action
            </Text>
          </View>
          <View style={styles.genres}>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "Gluten-Regular",
              }}
            >
              Thriller
            </Text>
          </View>
        </View>
        <View style={styles.vote_container}>
          <Ionicons name="star" size={14} color="gold" />
          <Text style={styles.vote_average}>
            {item.vote_average}/10 ({item.vote_count})
          </Text>
        </View>
        <View>
          <Text style={styles.overview}>{item.overview}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
    height: "100%",
  },
  gradient: {
    height: "60%",
    top: -20,
  },
  poster: {
    alignSelf: "center",
    width: "50%",
    height: "100%",
    resizeMode: "contain",
    margin: 70,
    borderRadius: 10,
    position: "relative",
  },

  info_container: {
    padding: 10,
    borderRadius: 10,
    top: -20,
  },
  original_title: {
    fontFamily: "Gluten-SemiBold",
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
  },
  vote_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  genre_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  genres: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 15,
    width: 50,
    height: 20,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 50,
  },
  vote_average: {
    fontFamily: "Gluten-Regular",
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
    marginLeft: 10,
  },
});
