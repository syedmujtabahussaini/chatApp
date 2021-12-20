import React, { useState, useEffect } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { TextInput, Text, View, Button } from "react-native";
import { auth, db } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
function Messages({ route, navigation }) {
  const [text, setText] = useState("");
  const [user1, setUser1] = useState({});

  onAuthStateChanged(auth, (current) => {
    setUser1(current);
  });

  const { user2 } = route.params;

  const sendHandler = async () => {
    const id =
      user1.uid > user2.id
        ? `${user1.uid + user2.uid} `
        : `${user2.uid + user1.uid} `;

    await addDoc(collection(db, "messages", id, "chat"), {
      text,
      from: user1.uid,
      to: user2.uid,
      createdAt: Timestamp.fromDate(new Date()),
    });
    console.log("===>", id);
    console.log("......>", user2.uid);
  };

  return (
    <View>
      <Text>Messages Screen</Text>
      <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
        {user2.name}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Enter Message...."
          style={{ borderColor: "black", borderWidth: 1 }}
          onChangeText={setText}
        />
        <Button title="send" onPress={sendHandler} />
      </View>
    </View>
  );
}

export default Messages;
