import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBarComponent";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = function () {
  const [text, setText] = useState("");
  const [results, error, searchApi] = useResults();

  const filterList = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.background}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <SearchBar
        text={text}
        onTextChange={(newText) => setText(newText)}
        onTermSubmit={() => searchApi(text)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList results={filterList("₺")} title="Cost Effective" />
        <ResultsList results={filterList("₺₺")} title="Bit Pricier" />
        <ResultsList results={filterList("₺₺₺")} title="Big Spender" />
      </ScrollView>
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#ffff",
    flex: 1,
  },
});

export default SearchScreen;
