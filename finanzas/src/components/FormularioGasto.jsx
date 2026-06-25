import { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";

const FormularioGasto = ({
  agregarGasto,
}) => {
  const [concepto, setConcepto] =
    useState("");

  const [monto, setMonto] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!concepto || !monto) {
      alert(
        "Completa todos los campos"
      );
      return;
    }

    await agregarGasto({
      concepto,
      monto: Number(monto),
    });

    setConcepto("");
    setMonto("");
  };

  return (
    <Paper
      sx={{
        p: 4,
        bgcolor: "#161616",
        border: "1px solid #D4AF37",
        borderRadius: 4,
        boxShadow:
          "0 0 25px rgba(255,215,0,.15)",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#FFD700",
          mb: 3,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        ➕ Nuevo Gasto
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          label="Concepto"
          value={concepto}
          onChange={(e) =>
            setConcepto(
              e.target.value
            )
          }
          margin="normal"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root":
              {
                color: "#FFD700",

                "& fieldset": {
                  borderColor:
                    "#D4AF37",
                },

                "&:hover fieldset":
                  {
                    borderColor:
                      "#FFD700",
                  },
              },

            "& .MuiInputLabel-root":
              {
                color: "#D4AF37",
              },
          }}
        />

        <TextField
          fullWidth
          type="number"
          label="Monto"
          value={monto}
          onChange={(e) =>
            setMonto(
              e.target.value
            )
          }
          margin="normal"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root":
              {
                color: "#FFD700",

                "& fieldset": {
                  borderColor:
                    "#D4AF37",
                },

                "&:hover fieldset":
                  {
                    borderColor:
                      "#FFD700",
                  },
              },

            "& .MuiInputLabel-root":
              {
                color: "#D4AF37",
              },
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            py: 1.5,
            fontWeight: "bold",
            fontSize: "1rem",
            background:
              "linear-gradient(90deg,#D4AF37,#FFD700)",
            color: "#000",

            "&:hover": {
              background:
                "linear-gradient(90deg,#FFD700,#F5DEB3)",
            },
          }}
        >
          Guardar Gasto
        </Button>
      </Box>
    </Paper>
  );
};

export default FormularioGasto;