import { StyleSheet, Text, View } from "react-native";

export default function Messagecomponent({ currentUser, item }) {
  const isOtherUser = item.currentUser !== currentUser;

  return (
    <View
      style={[
        styles.messageWrapper,
        isOtherUser ? styles.leftAlign : styles.rightAlign,
      ]}
    >
      <View
        style={[
          styles.bubble,
          isOtherUser ? styles.otherBubble : styles.myBubble,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            isOtherUser ? styles.otherText : styles.myText,
          ]}
        >
          {item.text}
        </Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageWrapper: {
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  leftAlign: {
    alignItems: "flex-start",
  },
  rightAlign: {
    alignItems: "flex-end",
  },
  bubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  myBubble: {
    backgroundColor: "#00B894",
    borderTopRightRadius: 0,
  },
  otherBubble: {
    backgroundColor: "#F1F1F1",
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
    marginBottom: 4,
  },
  myText: {
    color: "#fff",
  },
  otherText: {
    color: "#333",
  },
  timeText: {
    fontSize: 10,
    color: "#777",
    alignSelf: "flex-end",
  },
});
