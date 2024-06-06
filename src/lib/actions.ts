import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const POKE_API = "https://pokeapi.co/api/v2/";

export const usePokemons = () => {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: async () => {
      const { data } = await axios.get(`${POKE_API}pokemon?limit=151`);

      return data.results;
    },
  });
};

export const fetchPokemonDetail = async (pokemonName: string) => {
  const { data } = await axios.get(`${POKE_API}pokemon/${pokemonName}`);
  return data;
};

export const fetchAbilityDetail = async (abilityUrl: string) => {
  const { data } = await axios.get(abilityUrl);
  
  return data.effect_entries;
};

export const translateEffectToYoda = async (text: string): Promise<string> => {
  try {
    const { data } = await axios.get(
      `https://api.funtranslations.com/translate/yoda.json?text=${text}`
    );
    return data.contents.translated;
  } catch (error) {
    console.error("Error translating text:", error);
  }
  // Return the text in case of a failure
  return text;
};
