import { useContext, useEffect } from "react";
import {
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { GlobalContext } from "../context";
import Messagecomponent from "../components/Messagecomponent";
import { socket } from "../utils/index";

export default function Messagescreen({ route }) {
  const { currentGroupID } = route.params;
  const {
    allChatMessages,
    setAllChatMessages,
    currentUser,
    currentChatMesage,
    setCurrentChatMessage,
  } = useContext(GlobalContext);

  function handleAddNewMessage() {
    const now = new Date();
    const timeData = {
      hr: now.getHours().toString().padStart(2, "0"),
      mins: now.getMinutes().toString().padStart(2, "0"),
    };

    if (currentUser && currentChatMesage.trim() !== "") {
      socket.emit("newChatMessage", {
        currentChatMesage,
        groupIdentifier: currentGroupID,
        currentUser,
        timeData,
      });

      setCurrentChatMessage("");
      Keyboard.dismiss();
    }
  }

  useEffect(() => {
    socket.emit("findGroup", currentGroupID);
    socket.on("foundGroup", (allChats) => setAllChatMessages(allChats));
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.chatContainer}>
        {allChatMessages && allChatMessages.length > 0 ? (
          <FlatList
            data={allChatMessages}
            renderItem={({ item }) => (
              <Messagecomponent item={item} currentUser={currentUser} />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.messageList}
          />
        ) : (
          <Text style={styles.emptyText}>No messages yet. Start the chat!</Text>
        )}
      </View>

      <View style={styles.messageInputContainer}>
        <TextInput
          style={styles.messageInput}
          value={currentChatMesage}
          onChangeText={setCurrentChatMessage}
          placeholder="Type a message"
          placeholderTextColor="#999"
        />
        <Pressable onPress={handleAddNewMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const PRIMARY_COLOR = "#00B894"; // Teal green

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },
  chatContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  messageList: {
    paddingBottom: 10,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "#aaa",
    fontStyle: "italic",
  },
  messageInputContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  messageInput: {
    flex: 1,
    backgroundColor: "#F1F3F4",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
    fontSize: 16,
    color: "#222",
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  sendButton: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
