import { Box, Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <Box
      data-testid="loading-component"
      margin="auto"
      padding="20px"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
      }}
    >
      {[...Array(10)].map((_, index) => (
        <Skeleton key={index} width="100%" height={40} />
      ))}
    </Box>
  );
};

export default Loading;
