import {
  Alert,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";

export default function Homescreen({ navigation }) {
  const {
    showLoginView,
    setShowLoginView,
    currentUserName,
    setCurrentUserName,
    currentUser,
    setCurrentUser,
    allUsers,
    setAllUsers,
  } = useContext(GlobalContext);

  function handleRegisterAndSignIn(isLogin) {
    if (currentUserName.trim() !== "") {
      const index = allUsers.findIndex((user) => user === currentUserName);

      if (isLogin) {
        if (index === -1) {
          Alert.alert("User not found", "Please register first.");
        } else {
          setCurrentUser(currentUserName);
        }
      } else {
        if (index === -1) {
          setAllUsers([...allUsers, currentUserName]);
          setCurrentUser(currentUserName);
        } else {
          Alert.alert("Already registered", "Please login instead.");
        }
      }

      setCurrentUserName("");
    } else {
      Alert.alert("Oops!", "Username field is empty.");
    }

    Keyboard.dismiss();
  }

  useEffect(() => {
    if (currentUser.trim() !== "") navigation.navigate("Chatscreen");
  }, [currentUser]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {showLoginView ? (
          <>
            <Text style={styles.title}>Welcome back!</Text>
            <Text style={styles.description}>Let’s get you chatting again</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              placeholderTextColor="#999"
              value={currentUserName}
              onChangeText={setCurrentUserName}
            />

            <View style={styles.buttonGroup}>
              <Pressable
                style={[styles.button, styles.registerButton]}
                onPress={() => handleRegisterAndSignIn(false)}
              >
                <Text style={styles.buttonText}>Register</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.loginButton]}
                onPress={() => handleRegisterAndSignIn(true)}
              >
                <Text style={styles.buttonText}>Login</Text>
              </Pressable>
            </View>
          </>
        ) : (
          <>
            <Text style={styles.title}>Join Real-Time Conversations</Text>
            <Text style={styles.description}>
              Chat with people who share your passions and interests
            </Text>
            <Pressable
              style={styles.getStartedButton}
              onPress={() => setShowLoginView(true)}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}

const PRIMARY_COLOR = "#00B894";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 24,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1e1e1e",
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#5e5e5e",
    textAlign: "center",
    marginBottom: 25,
  },
  input: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  registerButton: {
    backgroundColor: PRIMARY_COLOR,
  },
  loginButton: {
    backgroundColor: "#009975", // slightly darker shade for contrast
  },
  getStartedButton: {
    backgroundColor: PRIMARY_COLOR,
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
});
