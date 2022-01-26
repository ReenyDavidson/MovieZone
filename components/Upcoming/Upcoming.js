import { View, Text, ImageBackground, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Upcoming({ item }) {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate("PopularDetailScreen")}>
      <View
        style={{
          margin: 5,
          padding: 5,
          flexDirection: "row",
        }}
      >
        <ImageBackground
          resizeMode="cover"
          resizeMethod="resize"
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
          style={styles.image}
          imageStyle={{ borderRadius: 10, backfaceVisibility: "hidden" }}
        ></ImageBackground>
        <View style={styles.info_container}>
          <Text style={styles.original_title}>{item.original_title}</Text>

          <View style={styles.vote_container}>
            <Ionicons name="star" size={14} color="gold" />
            <Text style={styles.vote_average}>{item.vote_average}/10</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 160,
    height: 200,
  },
  info_container: {
    position: "relative",
    width: 200,
    height: 200,
    borderRadius: 10,
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: 5,
    padding: 10,
  },
  original_title: {
    fontFamily: "Quicksand-SemiBold",
    color: "white",
    fontSize: 20,
    textAlign: "left",
    marginLeft: 10,
  },

  vote_average: {
    fontFamily: "Quicksand-Bold",
    color: "white",
    fontSize: 15,
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
    maxWidth: 60,
  },
  release_date: {
    fontFamily: "Quicksand-SemiBold",
    color: "#ff0",
    fontSize: 15,
    textAlign: "left",
    marginLeft: 10,
  },
});
