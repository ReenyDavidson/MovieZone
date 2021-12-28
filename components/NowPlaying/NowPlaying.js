import { useQuery } from "react-query";
import axios from "axios";

const queryKey = "nowPlaying";

const getNowPlaying = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=f7f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8&language=en-US&page=1",
  );
  return data;
};

const [data, isLoading, isError] = useQuery(queryKey, getNowPlaying);

export default function NowPlaying() {
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error!</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>NowPlaying</Text>
    </View>
  );
}
