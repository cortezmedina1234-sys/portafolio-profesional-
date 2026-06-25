import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
} from "@mui/material";

import FormularioGasto from "./components/FormularioGasto";
import Gastos from "./components/Gastos";
import Dashboard from "./components/Dashboard";

import {
  obtenerGastos,
  crearGasto,
  eliminarGasto,
} from "./service/gasto";

function App() {
  const [gastos, setGastos] = useState([]);

  const cargarGastos = async () => {
    const data = await obtenerGastos();
    setGastos(data || []);
  };

  useEffect(() => {
    cargarGastos();
  }, []);

  const agregarGasto = async (gasto) => {
    await crearGasto(gasto);
    cargarGastos();
  };

  const borrarGasto = async (id) => {
    if (window.confirm("¿Eliminar gasto?")) {
      await eliminarGasto(id);
      cargarGastos();
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#000000,#121212,#1a1a1a)",
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          align="center"
          sx={{
            color: "#FFD700",
            fontWeight: "bold",
            mb: 4,
            textShadow:
              "0 0 15px rgba(255,215,0,.5)",
          }}
        >
          💰 PANEL FINANCIERO
        </Typography>

        <Dashboard gastos={gastos} />

        <Grid container spacing={4} mt={2}>
          <Grid item xs={12} md={4}>
            <FormularioGasto
              agregarGasto={agregarGasto}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <Gastos
              gastos={gastos}
              eliminarGasto={borrarGasto}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;