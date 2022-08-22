import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = function ({ text, onTextChange, onTermSubmit }) {
  return (
    <View style={styles.background}>
      <Feather style={styles.button} name="search" size={30} color="black" />
      <TextInput
        style={{ flex: 1, fontSize: 18 }}
        placeholder="Search"
        value={text}
        onChangeText={(newText) => onTextChange(newText)}
        onEndEditing={(newTerm) => onTermSubmit(newTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  button: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});

export default SearchBar;
