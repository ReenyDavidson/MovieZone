import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { useNavigationState } from "@react-navigation/native";
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
        <LinearGradient colors={["transparent", "rgb(255,255,255)"]} style={styles.gradient}>
          <View style={styles.info_container}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.poster}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
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
});
