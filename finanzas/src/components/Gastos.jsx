import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";

const Gastos = ({
  gastos,
  eliminarGasto,
}) => {
  return (
    <Paper
      sx={{
        p: 4,
        borderRadius: 4,
        minHeight: 500,
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
        📋 Historial de Gastos
      </Typography>

      <List>
        {gastos.length === 0 ? (
          <Typography
            sx={{
              textAlign: "center",
              color: "#D4AF37",
            }}
          >
            No hay gastos registrados
          </Typography>
        ) : (
          gastos.map((gasto) => (
            <div key={gasto.id}>
              <ListItem
                sx={{
                  background:
                    "#1e1e1e",
                  borderRadius: 2,
                  mb: 1,
                  transition:
                    "all .3s ease",

                  "&:hover": {
                    background:
                      "#262626",
                    transform:
                      "translateY(-2px)",
                  },
                }}
                secondaryAction={
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() =>
                      eliminarGasto(
                        gasto.id
                      )
                    }
                  >
                    Eliminar
                  </Button>
                }
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        color:
                          "#FFD700",
                        fontWeight:
                          "bold",
                      }}
                    >
                      {
                        gasto.concepto
                      }
                    </Typography>
                  }
                  secondary={
                    <Typography
                      sx={{
                        color:
                          "#4ade80",
                      }}
                    >
                      $
                      {Number(
                        gasto.monto
                      ).toFixed(
                        2
                      )}
                    </Typography>
                  }
                />
              </ListItem>

              <Divider
                sx={{
                  borderColor:
                    "#333",
                }}
              />
            </div>
          ))
        )}
      </List>
    </Paper>
  );
};

export default Gastos;