import { View, Text, ImageBackground, StyleSheet } from "react-native";

export default function NowPlaying({ item }) {
  console.log(item);
  return (
    <View style={styles.container}>
      <View
        style={{
          margin: 5,
          padding: 10,
        }}
      >
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
          }}
          style={styles.image}
          imageStyle={{ borderRadius: 10 }}
        >
          <Text>{item.title}</Text>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 350,
    height: 200,
  },
});
