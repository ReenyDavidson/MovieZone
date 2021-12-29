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
    <FlatList
      data={data.results}
      horizontal={true}
      renderItem={({ item }) => {
        return <NowPlaying item={item} />;
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
