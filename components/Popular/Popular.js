import { View, Text, ImageBackground, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Popular({ item }) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("NowPlayingDetailScreen", item)}
    >
      <View
        style={{
          margin: 5,
          padding: 10,
        }}
      >
        <ImageBackground
          resizeMode="contain"
          resizeMethod="resize"
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
          style={styles.image}
          imageStyle={{ borderRadius: 10, backfaceVisibility: "hidden" }}
        >
          <View style={styles.info_container}>
            <Text style={styles.original_title}>{item.original_title}</Text>
            <Text style={styles.release_date}>{item.release_date.slice(0, 4)}</Text>
            <View style={styles.vote_container}>
              <Ionicons name="star" size={14} color="gold" />
              <Text style={styles.vote_average}>{item.vote_average}/10</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 130,
    height: 200,
  },
  info_container: {
    position: "absolute",
    width: 130,
    height: 200,
    borderRadius: 10,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
  },
  original_title: {
    fontFamily: "Quicksand-SemiBold",
    color: "white",
    fontSize: 15,
    textAlign: "left",
    marginLeft: 10,
    marginTop: 50,
  },

  vote_average: {
    fontFamily: "Quicksand-Bold",
    color: "white",
    fontSize: 11,
    textAlign: "left",
    marginLeft: 7,
  },
  vote_container: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 15,
    borderColor: "#3f51b5",
    backgroundColor: "#3f51b5",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 50,
    maxWidth: 55,
  },
  release_date: {
    fontFamily: "Quicksand-SemiBold",
    color: "#ff0",
    fontSize: 11,
    textAlign: "left",
    marginLeft: 10,
  },
});
