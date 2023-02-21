import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";

const placeholdeImage = require("../assets/images/logo.jpg");

const Display = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={placeholdeImage} style={styles.image}></Image>
      </View>
      <StatusBar style="auto"></StatusBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 12,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 18,
  },
});

export default Display;
