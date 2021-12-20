import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { Button, Text, View } from "react-native";
import { collection, onSnapshot, query, where } from "firebase/firestore";

function Home({ route, navigation }) {
  const [users, setUsers] = useState([]);

  const { result } = route.params;

  useEffect(() => {
    const usersRef = collection(db, "users");
    // create query object
    const q = query(usersRef, where("uid", "not-in", [result.user.uid]));
    // execute query
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users1 = [];
      querySnapshot.forEach((doc) => {
        users1.push(doc.data());
      });
      setUsers(users1);
    });
    return () => unsub();
  }, []);
  console.log("======>", users);
  return (
    <View>
      <Text>Home Screen</Text>
      <Text>User :{result.user.email}</Text>
      <Text>Users</Text>
      <View>
        {users.map((user2, i) => (
          <Text
            key={i}
            style={{ fontSize: 18, fontWeight: "bold", padding: 10 }}
            onPress={() => navigation.navigate("Messages", { user2 })}
          >
            {user2.name}
          </Text>
        ))}
      </View>

      <Button
        title="Messages"
        onPress={() => navigation.navigate("Messages")}
      />
    </View>
  );
}

export default Home;
