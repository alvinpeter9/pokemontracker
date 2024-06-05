import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000", // Black background
        textAlign: "center",
        padding: "16px",
        marginBottom: 4,
      }}
    >
      <Box
        component="img"
        src="assets/pokemon.png"
        alt="pokemonIcon"
        sx={{
          width: {
            xs: "200px", // 200px on small screens
            sm: "250px", // 250px on medium screens
            md: "300px", // 300px on large screens
            lg: "350px", // 350px on extra large screens
          },
          height: "auto", // Maintain aspect ratio
          marginBottom: "16px", // Add some spacing below the image
        }}
      />
      <Typography id="hero-text"
        sx={{
          fontWeight: "bold",
          background: "linear-gradient(90deg, lightgrey, grey)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: {
            xs: "2rem", // 32px on small screens
            sm: "3rem", // 48px on medium screens
            md: "4rem", // 64px on large screens
            lg: "4.5rem", // 80px on extra large screens
          },
        }}
        variant="h2"
        component="h1"
        gutterBottom
      >
        Discover Your Favorite Pokémon
      </Typography>
      <Typography
        variant="h5"
        component="p"
        gutterBottom
        sx={{
          fontSize: {
            xs: "1rem", // 16px on small screens
            sm: "1.25rem", // 20px on medium screens
            md: "1.5rem", // 24px on large screens
            lg: "1.75rem", // 28px on extra large screens
          },
        }}
      >
        Search and learn more about your favorite Pokémon from the extensive
        Pokédex.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ marginTop: "16px" }}
        onClick={() => {
          document
            .getElementById("pokemon-data")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default HeroSection;
