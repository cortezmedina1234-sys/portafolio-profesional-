import { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  Box,
  Paper,
} from "@mui/material";

const CardUser = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 300,
        margin: "auto",
        background: "linear-gradient(145deg, #0a0a0a, #1a001f)",
        color: "#e0d4ff",
        border: "1px solid #5a0f7a",
        borderRadius: 3,
        boxShadow: "0 0 20px rgba(128, 0, 128, 0.4)",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 0 30px rgba(180, 0, 255, 0.7)",
        },
      }}
    >
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
        >
          <Avatar
            src={user.picture.large}
            alt={user.name.first}
            sx={{
              width: 80,
              height: 80,
              border: "2px solid #a64dff",
              boxShadow: "0 0 10px #a64dff",
            }}
          />

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
              textShadow: "0 0 5px #a64dff",
            }}
          >
            {user.name.first} {user.name.last}
          </Typography>

          <Typography variant="body2" sx={{ color: "#c9a0ff" }}>
            {user.email}
          </Typography>

          <Typography variant="body2">
            Género: {user.gender}
          </Typography>
        </Box>

        {showDetails && (
          <Paper
            elevation={3}
            sx={{
              mt: 2,
              p: 2,
              backgroundColor: "#14001a",
              color: "#d9b3ff",
              border: "1px solid #5a0f7a",
            }}
          >
            <Typography variant="subtitle2">
              Tel: {user.phone}
            </Typography>

            <Typography variant="subtitle2">
              Cel: {user.cell}
            </Typography>

            <Typography variant="subtitle2">
              Ciudad: {user.location.city}
            </Typography>

            <Typography variant="subtitle2">
              País: {user.location.country}
            </Typography>

            <Typography variant="subtitle2">
              Edad: {user.dob.age}
            </Typography>
          </Paper>
        )}
      </CardContent>

      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          size="small"
          onClick={() => setShowDetails(!showDetails)}
          sx={{
            background: "linear-gradient(90deg, #5a0f7a, #a64dff)",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": {
              background: "linear-gradient(90deg, #7a1fa2, #c77dff)",
            },
          }}
        >
          {showDetails ? "Ocultar" : "Ver más"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardUser;