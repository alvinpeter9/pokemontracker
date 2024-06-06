import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { useAppContext } from "../hoc/AppContext";
import { useQuery } from "@tanstack/react-query";
import LanguageSwitcher from "./microComponents/LanguageSwitcher";
import {
  fetchAbilityDetail,
  fetchPokemonDetail,
  translateEffectToYoda,
} from "../lib/actions";
import Error from "./microComponents/Error";
import { AbilityEffect, PokemonDetail } from "../utils/types";


export const PokemonDetails: React.FC = () => {
  const [englishEffect, setEnglishEffect] = useState<string>("");
  const [yodaEffect, setYodaEffect] = useState<string>("");
  const { selectedPokemon, language, setLanguage, LanguageOptions } =
    useAppContext();

  const { data: pokemonData, error: pokemonError } = useQuery<
    PokemonDetail | undefined
  >({
    queryKey: ["pokemonDetail", selectedPokemon],
    queryFn: () => fetchPokemonDetail(selectedPokemon!),
    enabled: !!selectedPokemon,
  });

  const { data: abilitiesData, error: abilitiesError } = useQuery<
    AbilityEffect[] | undefined
  >({
    queryKey: ["abilitiesDetail", pokemonData?.abilities[0]?.ability.url],
    queryFn: () => {
      if (pokemonData?.abilities && pokemonData.abilities[0]) {
        return fetchAbilityDetail(pokemonData.abilities[0].ability.url);
      }
      return Promise.reject("No abilities found");
    },
    enabled: !!pokemonData && pokemonData.abilities.length > 0,
  });


  useEffect(() => {
    if (abilitiesData) {
      abilitiesData
        ?.filter(
          (ability: AbilityEffect) =>
            ability.language.name === LanguageOptions.ENGLISH
        )
        .map((ability) => setEnglishEffect(ability.effect));

      const translate = async () => {
        try {
          const result = await translateEffectToYoda(englishEffect);
          setYodaEffect(result);
        } catch (error) {
          console.error("Error translating effect:", error);
        }
      };

      translate();
    }
    return () => {
      setYodaEffect("");
      setEnglishEffect("");
      setLanguage(LanguageOptions.ENGLISH);
    };
  }, [abilitiesData, englishEffect, LanguageOptions.ENGLISH, setLanguage]);

  if (pokemonError) return <Error />;
  if (abilitiesError) return <div>Error loading abilities...</div>;

  const handleLanguageSwitch = () => {
    setLanguage(
      language === LanguageOptions.ENGLISH
        ? LanguageOptions.YODA
        : LanguageOptions.ENGLISH
    );
  };

  const currentEffect =
    language === LanguageOptions.ENGLISH ? englishEffect : yodaEffect;

  return (
    <Card
      sx={{
        position: "absolute",
        right: 0,
        width: selectedPokemon ? "90%" : "0",
        transition: "width 0.5s",
        height: "100%",
        borderRadius: 0,
      }}
    >
      <LanguageSwitcher handleLanguageSwitch={handleLanguageSwitch} />
      <Divider />
      <CardContent
        sx={{
          margin: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          {selectedPokemon}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <img
            width="200px"
            src={pokemonData?.sprites?.front_default}
            alt="Pokemon"
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Abilities 💪
          </Typography>
          <Box
            sx={{
              width: "100%",
              padding: 2,
              border: 1,
              borderColor: "#C0C0C0",
              borderRadius: "16px",
            }}
          >
            {pokemonData?.abilities.map((ability, index) => (
              <div key={index}>
                <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                  ⭐ {ability.ability.name}
                </Typography>
                {index < pokemonData.abilities.length - 1 && <Divider />}
              </div>
            ))}
          </Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
            Effect 🔥
          </Typography>
          <Box
            sx={{
              width: "100%",
              padding: 2,
              border: 1,
              borderColor: "#C0C0C0",
              borderRadius: "16px",
            }}
          >
            <Typography variant="subtitle1">{currentEffect}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
