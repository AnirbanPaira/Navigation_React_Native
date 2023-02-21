import React from "react";
import { View, Text, Button } from "react-native-web";

const Contact = () => {
  return (
    <View>
      <Text>Contact us Page</Text>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.navigate("Application")}
      />
    </View>
  );
};

export default Contact;
