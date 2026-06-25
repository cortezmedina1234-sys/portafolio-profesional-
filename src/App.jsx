import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  Button,
  Avatar,
  Stack,
} from "@mui/material";

import {
  GitHub,
  Email,
  Phone,
  School,
  Code,
} from "@mui/icons-material";

function Section({ title, children }) {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Paper
        elevation={8}
        sx={{
          p: 5,
          borderRadius: 5,
          background:
            "linear-gradient(135deg,#1e293b,#0f172a)",
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: "#38bdf8",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>

        {children}
      </Paper>
    </Container>
  );
}

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#020617",
        color: "white",
      }}
    >
      {/* HERO */}

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 3,
          background:
            "linear-gradient(135deg,#0f172a,#1e293b)",
        }}
      >
        <Box>
          <Avatar
            sx={{
              width: 180,
              height: 180,
              mx: "auto",
              mb: 3,
              fontSize: 80,
              bgcolor: "#38bdf8",
            }}
          >
            F
          </Avatar>

          <Typography
            variant="h2"
            fontWeight="bold"
          >
            Fernando Medina Cortez
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "#38bdf8",
              mt: 2,
            }}
          >
            Desarrollador Full Stack
          </Typography>

          <Typography
            sx={{
              mt: 3,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Estudiante de Ingeniería en
            Sistemas Computacionales con
            experiencia en desarrollo web,
            bases de datos y aplicaciones
            empresariales.
          </Typography>
        </Box>
      </Box>

      {/* PERFIL */}

      <Section title="Perfil Profesional">
        <Typography>
          Soy Fernando Medina Cortez,
          estudiante de Ingeniería en
          Sistemas Computacionales.
          Me especializo en React,
          NestJS, MySQL y desarrollo
          Full Stack.
        </Typography>
      </Section>

      {/* RESUMEN */}

      <Section title="Resumen Profesional">
        <Typography>
          He desarrollado sistemas de
          ventas, dashboards financieros
          y APIs REST utilizando React,
          NestJS y MySQL.
          Tengo experiencia en diseño de
          bases de datos, interfaces web,
          integración de APIs y desarrollo
          de soluciones empresariales.
        </Typography>
      </Section>

      {/* HABILIDADES */}

      <Section title="Habilidades Técnicas">
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          useFlexGap
        >
          <Chip label="React" color="primary" />
          <Chip label="JavaScript" color="primary" />
          <Chip label="Node.js" color="primary" />
          <Chip label="NestJS" color="primary" />
          <Chip label="MySQL" color="primary" />
          <Chip label="Git" color="primary" />
          <Chip label="GitHub" color="primary" />
          <Chip label="Material UI" color="primary" />
          <Chip label="Supabase" color="primary" />
        </Stack>
      </Section>

      {/* PROYECTOS */}

      <Section title="Proyectos Destacados">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5">
                Sistema de Ventas
              </Typography>

              <Typography>
                Gestión de ventas,
                inventario y clientes.
              </Typography>

              <Typography mt={2}>
                React + Node.js + MySQL
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5">
                Dashboard Financiero
              </Typography>

              <Typography>
                Registro de gastos y
                visualización de datos.
              </Typography>

              <Typography mt={2}>
                React + Supabase
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5">
                API REST Productos
              </Typography>

              <Typography>
                CRUD completo de productos
                y categorías.
              </Typography>

              <Typography mt={2}>
                NestJS + MySQL
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5">
                Calculadora de Calorías
              </Typography>

              <Typography>
                Gestión y cálculo de
                calorías consumidas.
              </Typography>

              <Typography mt={2}>
                React + TypeScript
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Section>

      {/* ACADEMICO */}

      <Section title="Trayectoria Académica">
        <Box display="flex" gap={2}>
          <School
            sx={{
              fontSize: 50,
              color: "#38bdf8",
            }}
          />

          <Typography>
            Ingeniería Informatica.
            Formación en desarrollo web,
            bases de datos y arquitectura
            de software.
          </Typography>
        </Box>
      </Section>

      {/* OBJETIVOS */}

      <Section title="Objetivos Profesionales">
        <Typography>
          Convertirme en desarrollador
          Full Stack profesional y
          especializarme en arquitectura
          de software, aplicaciones web
          empresariales y tecnologías
          modernas.
        </Typography>
      </Section>

      {/* CONTACTO */}

      <Section title="Contacto">
        <Stack spacing={2}>
          <Box display="flex" gap={2}>
            <Email />
            <Typography>
              cortez.medina1234@gmail.com
            </Typography>
          </Box>

          <Box display="flex" gap={2}>
            <Phone />
            <Typography>
              7121535439
            </Typography>
          </Box>

          <Box display="flex" gap={2}>
            <GitHub />
            <Typography>
              Agrega aquí tu GitHub
            </Typography>
          </Box>
        </Stack>
      </Section>

      {/* FOOTER */}

      <Box
        sx={{
          py: 5,
          textAlign: "center",
          bgcolor: "#0f172a",
        }}
      >
        <Typography>
          © 2026 Fernando Medina Cortez
        </Typography>

        <Typography>
          Portafolio Profesional
        </Typography>
      </Box>
    </Box>
  );
}