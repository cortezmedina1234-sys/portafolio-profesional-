import { Grid } from "@mui/material";
import CardUser from "./CardUser";
import { data } from "../Data/data";

const Directory = () => {
  return (
    <Grid container spacing={2} padding={2}>
      {data.map((user, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CardUser user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Directory;