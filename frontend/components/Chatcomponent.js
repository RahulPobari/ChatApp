import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Chatcomponent({ item }) {
  const navigation = useNavigation();

  const lastMessage =
    item?.messages?.length > 0 ? item.messages[item.messages.length - 1] : null;

  function handleNavigateToMessageScreen() {
    navigation.navigate("Messagescreen", {
      currentGroupName: item.currentGroupName,
      currentGroupID: item.id,
    });
  }

  return (
    <Pressable style={styles.chatCard} onPress={handleNavigateToMessageScreen}>
      <View style={styles.circle}>
        <FontAwesome name="group" size={22} color="#00B894" />
      </View>

      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.groupName}>{item.currentGroupName}</Text>
          <Text style={styles.time}>
            {lastMessage?.time || "Now"}
          </Text>
        </View>

        <Text style={styles.lastMessage} numberOfLines={1}>
          {lastMessage?.text || "Tap to start messaging"}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chatCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
  },
  circle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E6F8F2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  groupName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  time: {
    fontSize: 12,
    color: "#888",
  },
  lastMessage: {
    fontSize: 14,
    color: "#444",
    opacity: 0.8,
  },
});
