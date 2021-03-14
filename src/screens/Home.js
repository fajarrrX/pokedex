import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import handleResponse from "../utils/handleResponseFetch";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [searchfeild, setSearchfeild] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemons();
    return () => pokemons;
  }, []);

  const fetchPokemons = async () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
      .then(handleResponse)
      .then((pokemons) => setPokemons(pokemons.results))
      .catch((error) => setError(error));
  };
  return (
    <View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchfeild}
          placeholder="Search Pokemons"
          onChangeText={(value) => setSearchfeild(value)}
          value={searchfeild}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          {pokemons
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(searchfeild.toLowerCase())
            )
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.card}
                  onPress={() => Alert.alert(`Hi i'm ${pokemon.name}`)}
                >
                  <Image
                    style={{ width: 150, height: 150 }}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                    }}
                  />
                  <Text>{pokemon.name}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 50,
  },
  card: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#dbdbdb",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  searchContainer: {
    backgroundColor: "#fff",
    position: "absolute",
    zIndex: 1,
    marginTop: 0,
    width: "100%",
  },
  searchfeild: {
    height: 40,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    textAlign: "center",
    width: "100%",
    borderRadius: 10,
  },
});
