import Directory from "./Components/Directory";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #000000, #1a001f)",
        padding: 2,
      }}
    >
      <Directory />
    </Box>
  );
}

export default App;