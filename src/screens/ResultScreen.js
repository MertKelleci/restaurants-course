import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const itemID = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get("/" + id);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(itemID);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default ResultScreen;
