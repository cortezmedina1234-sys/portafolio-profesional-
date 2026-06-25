import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const COLORS = [
  "#FFD700",
  "#D4AF37",
  "#B8860B",
  "#F5DEB3",
  "#CD7F32",
  "#DAA520",
  "#FFC125",
];

export default function Dashboard({
  gastos,
}) {
  const total = gastos.reduce(
    (acc, item) =>
      acc + Number(item.monto),
    0
  );

  const promedio =
    gastos.length > 0
      ? total / gastos.length
      : 0;

  const grafica = gastos.map(
    (g) => ({
      name: g.concepto,
      value: Number(g.monto),
    })
  );

  const estiloCard = {
    p: 4,
    bgcolor: "#161616",
    border: "1px solid #D4AF37",
    borderRadius: 4,
    boxShadow:
      "0 0 25px rgba(255,215,0,.15)",
    textAlign: "center",
    transition: "0.3s",

    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow:
        "0 0 35px rgba(255,215,0,.3)",
    },
  };

  return (
    <>
      {/* TARJETAS KPI */}
      <Grid
        container
        spacing={3}
        mb={4}
      >
        <Grid
          item
          xs={12}
          md={4}
        >
          <Paper sx={estiloCard}>
            <Typography
              sx={{
                color: "#D4AF37",
                mb: 1,
              }}
            >
              💰 Total Gastos
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "#FFD700",
                fontWeight: "bold",
              }}
            >
              ${total.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
        >
          <Paper sx={estiloCard}>
            <Typography
              sx={{
                color: "#D4AF37",
                mb: 1,
              }}
            >
              📈 Promedio
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "#4ade80",
                fontWeight: "bold",
              }}
            >
              ${promedio.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
        >
          <Paper sx={estiloCard}>
            <Typography
              sx={{
                color: "#D4AF37",
                mb: 1,
              }}
            >
              📋 Registros
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "#60a5fa",
                fontWeight: "bold",
              }}
            >
              {gastos.length}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* GRAFICA PASTEL */}
      <Grid
        container
        spacing={3}
      >
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 4,
              bgcolor: "#161616",
              border:
                "1px solid #D4AF37",
              borderRadius: 4,
              height: 750,
              boxShadow:
                "0 0 25px rgba(255,215,0,.15)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#FFD700",
                textAlign: "center",
                mb: 4,
                fontWeight: "bold",
              }}
            >
              🥧 Distribución de Gastos
            </Typography>

            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <PieChart>
                <Pie
                  data={grafica}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={250}
                  innerRadius={100}
                  label
                >
                  {grafica.map(
                    (
                      entry,
                      index
                    ) => (
                      <Cell
                        key={index}
                        fill={
                          COLORS[
                            index %
                              COLORS.length
                          ]
                        }
                      />
                    )
                  )}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* GRAFICA BARRAS */}
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 4,
              bgcolor: "#161616",
              border:
                "1px solid #D4AF37",
              borderRadius: 4,
              height: 750,
              mt: 3,
              boxShadow:
                "0 0 25px rgba(255,215,0,.15)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#FFD700",
                textAlign: "center",
                mb: 4,
                fontWeight: "bold",
              }}
            >
              📊 Gastos por Concepto
            </Typography>

            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart
                data={grafica}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#333"
                />

                <XAxis
                  dataKey="name"
                  stroke="#FFD700"
                />

                <YAxis
                  stroke="#FFD700"
                />

                <Tooltip />

                <Legend />

                <Bar
                  dataKey="value"
                  fill="#FFD700"
                  radius={[
                    12,
                    12,
                    0,
                    0,
                  ]}
                  barSize={80}
                />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}