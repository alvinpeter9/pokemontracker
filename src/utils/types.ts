export type Pokemon = {
  name: string;
  url: string;
};

export type AbilityEffect = {
  effect: string;
  short_effect: string;
  language: {
    name: string;
  };
};

export type Ability = {
  ability: {
    name: string;
    url: string;
  };
};

export type PokemonDetail = {
  abilities: Ability[];
  sprites: {
    front_default: string;
  };
};
