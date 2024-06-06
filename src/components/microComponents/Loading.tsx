import { Box, Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <Box
      data-testid="loading-component"
      margin="auto"
      padding="20px"
      width="100%"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
      }}
    >
      <Box border="1px solid #c0c0c0"
      padding="2px 8px"
    sx={{backgroundColor: "#09090B"}}
      component={"span"}
      borderRadius="5px"
      >
        Loading...
      </Box>
      {[...Array(10)].map((_, index) => (
        <Skeleton key={index} width="100%" height={40} />
      ))}
    </Box>
  );
};

export default Loading;
