import { Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

type Props = {};

export default function SimpleCard() {
  return (
    <Grid2 xs={3}>
      <Paper elevation={2}>Hello world!</Paper>
    </Grid2>
  );
}
