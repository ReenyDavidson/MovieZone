import { useQuery } from "react-query";
import axios from "axios";
import { View, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Upcoming from "./Upcoming";

const queryKey = "upcoming";

const getData = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=e1e7f6d071160e897c09a99f4983b865&language=en-US&page=1",
  );

  return data;
};

export default function GetUpcoming() {
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
            color: "#fff",
            fontSize: 20,
            textAlign: "left",
          }}
        >
          Upcoming Movies
        </Text>
        <Ionicons name="ios-arrow-forward" size={20} color="#fff" />
      </View>
      <FlatList
        data={data.results}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal={false}
        renderItem={({ item }) => {
          return <Upcoming item={item} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
