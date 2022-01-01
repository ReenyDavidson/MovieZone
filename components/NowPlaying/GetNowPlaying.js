import { useQuery } from "react-query";
import axios from "axios";
import { View, Text, FlatList } from "react-native";
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
        top: 25,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "Quicksand-SemiBold",
            color: "#fff",
            fontSize: 25,

            textAlign: "left",
            margin: 15,
          }}
        >
          Now Playing
        </Text>
        <Text
          style={{
            fontFamily: "Quicksand-Light",
            color: "#fff",
            fontSize: 20,
            textAlign: "right",
            margin: 15,
          }}
        >
          see all
        </Text>
      </View>
      <FlatList
        data={data.results}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
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
