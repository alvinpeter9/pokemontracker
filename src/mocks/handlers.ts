import { http, HttpResponse } from "msw";

export const mockPokemonData = [
  { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
  { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
  { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
  { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
  { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
  { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
  { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
  { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
  { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
  { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
  { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/" },
  { name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/" },
  { name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/" },
  { name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/" },
  { name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/" },
  { name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/" },
  { name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/" },
  { name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/" },
  { name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/" },
  { name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/" },
  { name: "spearow", url: "https://pokeapi.co/api/v2/pokemon/21/" },
];

export const mockAbilityDetail = {
  effect_entries: [
    {
      effect: "Powers up Grass-type moves when the Pokémon's HP is low.",
      language: { name: "en" },
    },
  ],
};


export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("https://pokeapi.co/api/v2/pokemon?limit=151", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      results: [...mockPokemonData],
    });
  }),
];
