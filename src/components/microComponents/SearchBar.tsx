import { TextField } from "@mui/material";
import React from "react";

interface SearchBarProps {
  searchQuery: string;
  handleSearchQuery: (e: React.ChangeEvent<HTMLInputElement>) => void; // Corrected type for handleSearchQuery
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  handleSearchQuery,
}) => {
  return (
    <TextField
      label="Search Pokemon"
      variant="outlined"
      value={searchQuery}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleSearchQuery(e)
      }
      inputProps={{ "data-testid": "search-input" }}
      sx={{
        marginTop: "20px",
        marginBottom: "20px",
        width: "100%",
        "& input": { color: "#C0C0C0" },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#C0C0C0",
          },
          "&:hover fieldset": {
            borderColor: "#C0C0C0",
          },
        },
        "& .MuiInputLabel-root": {
          color: "#C0C0C0",
        },
      }}
    />
  );
};

export default SearchBar;
