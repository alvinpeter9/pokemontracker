import React, { useState } from "react";
import { useAppContext } from "../hoc/AppContext";
import Wrapper from "./microComponents/Wrapper";
import SearchBar from "./microComponents/SearchBar";
import { usePokemons } from "../lib/actions";
import { Pokemon } from "../utils/types";
import PokemonTableCard from "./microComponents/PokemonTableCard";

const PokemonList: React.FC = () => {
  const { data, error, isLoading } = usePokemons();
  const { setSelectedPokemon } = useAppContext();

  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const rowsPerPage = 10;

  const filteredData = data?.filter((pokemon: Pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    event.preventDefault();
    setPage(newPage);
    setSearchQuery("");
  };

  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPokemon(null);
    setSearchQuery(event.target.value);
    setPage(1);
  };

  return (
    <section id="pokemon-data">
      <Wrapper
        padding="20px"
        flexDirection="column"
        border="none"
        minHeight="100vh"
        maxWidth={{ md: "700px" }}
      >
        <SearchBar
          searchQuery={searchQuery}
          handleSearchQuery={handleSearchQuery}
        />
          <PokemonTableCard
            error={error}
            isLoading={isLoading}
            filteredData={filteredData}
            handleChangePage={handleChangePage}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        </Wrapper>
    </section>
  );
};

export default PokemonList;
