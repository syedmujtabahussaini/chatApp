import React, { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet } from "react-native";
import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        createAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View>
      <Text>User Registeration</Text>
      <View>
        <TextInput onChangeText={setName} placeholder="Enter Name..." />
        <TextInput onChangeText={setEmail} placeholder="Enter Email id..." />
        <TextInput onChangeText={setPassword} placeholder="Enter Password..." />
      </View>
      <View>
        <Button title="Register" onPress={registerHandler} />
      </View>
    </View>
  );
}

export default Register;
