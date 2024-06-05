import { Box, Container, Link, Typography } from "@mui/material";
import { Code, CodeXml } from "lucide-react";


const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        margin: "auto",
        padding: "20px",
        inset: 0,
        backgroundColor: "#000",
        marginTop: 30,
        p: 10,
      }}
      component="footer"
    >
      <Box
        component="img"
        src="assets/pokemon_PNG98.png"
        alt="pokemonImg"
        sx={{
          position: "absolute",
          top: "-140px", // Adjust this value based on the image height
          left: "50%",
          transform: "translateX(-50%)",
          width: "350px", // Adjust width as needed
          height: "auto", // Maintain aspect ratio
        }}
      />
      <Container 
        sx={{
          textAlign: "center",
          maxWidth: ["100%","700px"],
        }}
      >
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Made with 🫶 by
          <Code style={{ marginLeft: "5px" }} />
          <Link href="https://alvinpeter9.vercel.app">Simeon</Link>
          <CodeXml style={{ marginRight: "5px" }} />
          for
          <Link sx={{ margin: "0 5px" }} href="https://www.iventis.com/">
            Iventis
          </Link>{" "}
          Code Task
        </Typography>

        <Typography
          variant="body2"
          color="#C0C0C0"
          align="center"
          marginTop="20px"
        >
          © Copyright 2024
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
