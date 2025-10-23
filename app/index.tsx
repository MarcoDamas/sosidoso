import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(250, 252, 223, 0.62)",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24
        }}
      >HomeScreen!</Text>
    </View>
  );
}
