import { useContext, useEffect } from "react";
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GlobalContext } from "../context";
import { AntDesign } from "@expo/vector-icons";
import Chatcomponent from "../components/Chatcomponent";
import NewGroupModal from "../components/Modal";
import { socket } from "../utils";

export default function Chatscreen({ navigation }) {
  const {
    currentUser,
    allChatRooms,
    setAllChatRooms,
    modalVisible,
    setModalVisible,
    setCurrentUser,
    setShowLoginView,
  } = useContext(GlobalContext);

  useEffect(() => {
    socket.emit("getAllGroups");
    socket.on("groupList", (groups) => {
      setAllChatRooms(groups);
    });
  }, []);

  function handleLogout() {
    setCurrentUser("");
    setShowLoginView(false);
  }

  useEffect(() => {
    if (currentUser.trim() === "") navigation.navigate("Homescreen");
  }, [currentUser]);

  return (
    <View style={styles.mainWrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Welcome, {currentUser}!</Text>
          <Pressable onPress={handleLogout} style={styles.logoutButton}>
            <AntDesign name="logout" size={24} color="#333" />
          </Pressable>
        </View>
      </View>

      <View style={styles.listContainer}>
        {allChatRooms && allChatRooms.length > 0 ? (
          <FlatList
            data={allChatRooms}
            renderItem={({ item }) => <Chatcomponent item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
          />
        ) : (
          <Text style={styles.emptyText}>No groups yet. Create one below!</Text>
        )}
      </View>

      <View style={styles.bottomContainer}>
        <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
          <Text style={styles.buttonText}>Create New Group</Text>
        </Pressable>
      </View>

      {modalVisible && <NewGroupModal />}
    </View>
  );
}

const PRIMARY_COLOR = "#00B894"; // Teal green

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "#F5F7F9",
  },
  topContainer: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    color: "#222",
  },
  logoutButton: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  bottomContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "#999",
    fontStyle: "italic",
  },
});
