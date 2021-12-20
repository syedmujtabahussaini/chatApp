import React, { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet } from "react-native";
import { auth, db } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      await updateDoc(doc(db, "users", result.user.uid), {
        isOnline: true,
      });
      navigation.navigate("Home", { result });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View>
      <Text>Login User</Text>
      <View>
        <TextInput onChangeText={setEmail} placeholder="Enter Email id..." />
        <TextInput onChangeText={setPassword} placeholder="Enter Password..." />
      </View>
      <View>
        <Button title="Login" onPress={registerHandler} />
      </View>
    </View>
  );
}

export default Login;
