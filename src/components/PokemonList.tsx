import React, { useCallback, useState } from "react";
import { useAppContext } from "../hoc/AppContext";
import Wrapper from "./microComponents/Wrapper";
import SearchBar from "./microComponents/SearchBar";
import { PokemonDetails } from "./PokemonDetail";
import Loading from "./microComponents/Loading";
import { usePokemons } from "../lib/actions";
import { Pokemon } from "../utils/types";
import Error from "./microComponents/Error";
import PokemonTableCard from "./microComponents/PokemonTableCard";

const PokemonList: React.FC = () => {
  const { data, error, isLoading } = usePokemons();
  const { selectedPokemon, setSelectedPokemon } = useAppContext();

  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const rowsPerPage = 10;

  const filteredData = data?.filter((pokemon: Pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const handleChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, newPage: number) => {
      event.preventDefault()
      setPage(newPage);
      setSearchQuery("");
    },
    []
  );

  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPokemon(null);
    setSearchQuery(event.target.value);
    setPage(1);
  };

  const renderContent = useCallback(() => {
    if (isLoading) return <Loading />;
    if (error) return <Error />;
    return (
      <>
        <PokemonTableCard
          filteredData={filteredData}
          handleChangePage={handleChangePage}
          page={page}
          rowsPerPage={rowsPerPage}
        />
        <PokemonDetails />
      </>
    );
  }, [isLoading, error, filteredData, handleChangePage, page, rowsPerPage]);

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
        <Wrapper
          display={error || isLoading ? "block" : "flex"}
          width="100%"
          minHeight={selectedPokemon ? "100vh" : "auto"}
          position="relative"
          backgroundColor="whitesmoke"
        >
          {renderContent()}
        </Wrapper>
      </Wrapper>
    </section>
  );
};

export default PokemonList;
