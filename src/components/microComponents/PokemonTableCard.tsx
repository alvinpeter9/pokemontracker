import React from 'react';
import { Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination } from '@mui/material';
import { useAppContext } from '../hoc/AppContext';

interface Pokemon {
  name: string;
}

interface PokemonTableProps {
  filteredData: Pokemon[];
  page: number;
  rowsPerPage: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const PokemonTableCard: React.FC<PokemonTableProps> = ({ 
  filteredData, page, rowsPerPage, handleChangePage }) => {

  const { selectedPokemon, setSelectedPokemon } = useAppContext();

  return (
    <Card
    sx={{
      transform: selectedPokemon ? "translateX(-90%)" : "translateX(0)",
      transition: "transform 0.5s",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <TableContainer component={Paper}>
      <Table sx={{ minHeight: "100%" }}>
        <TableHead sx={{ backgroundColor: "#18181B", }}>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
              }}
            >
              #
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
              }}
            >
              Pokemon Name
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData &&
            filteredData
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((pokemon: Pokemon, index: number) => (
                <TableRow
                  key={pokemon.name}
                  hover
                  onClick={() => setSelectedPokemon(pokemon.name)}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    {(page - 1) * rowsPerPage + index + 1}
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    {pokemon.name}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Pagination
      sx={{
        marginTop: 4,
        marginBottom: 4,
      }}
      variant="outlined"
      shape="rounded"
      count={Math.ceil((filteredData?.length || 0) / rowsPerPage)}
      page={page}
      onChange={handleChangePage}
      color="primary"
    />
  </Card>
  );
};

export default PokemonTableCard;
