import { useQuery } from "react-query";
import axios from "axios";
import { View, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NowPlaying from "./NowPlaying";

const queryKey = "nowPlaying";

const getData = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=e1e7f6d071160e897c09a99f4983b865&language=en-US",
  );

  return data;
};

export default function GetNowPlaying() {
  const { data, isLoading, isError } = useQuery(queryKey, getData);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return (
      <View>
        <Text>Error!</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 15,
        }}
      >
        <Text
          style={{
            fontFamily: "Quicksand-SemiBold",
            color: "#FFFFFF",
            fontSize: 25,
            textAlign: "left",
          }}
        >
          Now Playing
        </Text>
        <Ionicons name="ios-arrow-forward" size={20} color="#FFFFFF" />
      </View>
      <FlatList
        data={data.results}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        bounces={false}
        horizontal={true}
        renderItem={({ item }) => {
          return <NowPlaying item={item} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
