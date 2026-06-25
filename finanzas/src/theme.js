import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#FFD700",
    },

    secondary: {
      main: "#D4AF37",
    },

    background: {
      default: "#0a0a0a",
      paper: "#161616",
    },

    text: {
      primary: "#FFD700",
      secondary: "#D4AF37",
    },
  },

  shape: {
    borderRadius: 20,
  },

  typography: {
    fontFamily:
      "Poppins, Inter, Roboto, sans-serif",

    h3: {
      fontWeight: 700,
      color: "#FFD700",
    },

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 600,
      color: "#FFD700",
    },

    h6: {
      fontWeight: 600,
      color: "#FFD700",
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#161616",
          border: "1px solid #D4AF37",
          boxShadow:
            "0 0 20px rgba(255,215,0,.12)",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: "bold",
          textTransform: "none",
        },
      },
    },
  },
});