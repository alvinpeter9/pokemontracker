import { Box, Typography } from "@mui/material";

const Error = () => {
  return (
    <Box
    data-testid="error-component"
      margin="auto"
      padding="20px"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
        minHeight: "500px",
      }}
    >
      <img src="assets/computer.png" width="100%" alt="error" />
      <Typography
        variant="h4"
        sx={{ fontWeight: ["medium", "bold"] }}
        color="error"
        textAlign="center"
        margin="auto"
      >
        Something went wrong!
      </Typography>
    </Box>
  );
};

export default Error;
