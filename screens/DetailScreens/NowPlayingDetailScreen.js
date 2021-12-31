import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { useNavigationState } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function NowPlayingDetailScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigationState((state) => state);
  const item = navigation.routes[navigation.routes.length - 1].params;
  console.log(item);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <ImageBackground
        style={{
          width: "100%",
          height: "60%",
        }}
        imageStyle={{ resizeMode: "contain", top: -15 }}
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }}
      >
        <LinearGradient colors={["rgba(15,15,15,0.5)", "#0f0f0f"]} style={styles.gradient}>
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
                fontFamily: "Quicksand-Regular",
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
                fontFamily: "Quicksand-Regular",
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
        <View style={styles.overview_container}>
          <Text
            style={{
              fontFamily: "Quicksand-Bold",
              color: "#e5e4e2",
              fontSize: 20,
              margin: 10,

              textAlign: "left",
            }}
          >
            Overview
          </Text>
          <Text ellipsizeMode="tail" numberOfLines={2} style={styles.overview}>
            {item.overview}
          </Text>
          <Pressable
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#fff",
              borderWidth: 1,
              width: 90,
              borderRadius: 50,
              padding: 5,
              marginTop: 10,
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text
              style={{
                fontFamily: "Quicksand-Regular",
                fontSize: 15,
                color: "#fff",
                letterSpacing: 0.8,
                lineHeight: 26,
              }}
            >
              Read more
            </Text>
          </Pressable>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text
                style={{
                  fontFamily: "Quicksand-Regular",
                  fontSize: 15,
                  color: "#Ecf3f9",
                  letterSpacing: 0.8,
                  lineHeight: 26,
                }}
              >
                {item.overview}
              </Text>
              <Pressable
                style={{
                  justifyContent: "center",
                  alignItems: "center",

                  width: 100,
                  borderRadius: 50,
                  padding: 5,
                  marginTop: 10,
                }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Ionicons name="ios-close" size={20} color="#fff" />
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
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
    top: -25,
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
  },
  original_title: {
    fontFamily: "Quicksand-SemiBold",
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
    fontFamily: "Quicksand-Regular",
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
    marginLeft: 10,
  },
  overview_container: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    margin: 10,
  },
  overview: {
    fontFamily: "Quicksand-Regular",
    fontSize: 16,
    color: "#fff",
    letterSpacing: 0.8,
    lineHeight: 26,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    height: "50%",
    backgroundColor: "rgb(15,15,15)",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
