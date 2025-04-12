import React, { useContext } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Keyboard,
} from "react-native";
import { GlobalContext } from "../context";
import { socket } from "../utils";

const NewGroupModal = () => {
  const {
    modalVisible,
    setModalVisible,
    currentGroupName,
    setCurrentGroupName,
  } = useContext(GlobalContext);

  function handleCreateNewRoom() {
    if (!currentGroupName.trim()) {
      Alert.alert("Group name is empty", "Please enter a group name.");
      return;
    }

    socket.emit("createNewGroup", currentGroupName);
    setModalVisible(false);
    setCurrentGroupName("");
    Keyboard.dismiss();
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(false);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Create New Group</Text>
          <TextInput
            placeholder="Enter group name"
            placeholderTextColor="#aaa"
            style={styles.input}
            onChangeText={setCurrentGroupName}
            value={currentGroupName}
          />
          <View style={styles.buttonRow}>
            <Pressable style={[styles.button, styles.createButton]} onPress={handleCreateNewRoom}>
              <Text style={styles.buttonText}>Add</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.cancelButton]} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalView: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#1e1e1e",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    color: "#333",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  createButton: {
    backgroundColor: "#00B894",
  },
  cancelButton: {
    backgroundColor: "#636e72",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default NewGroupModal;
