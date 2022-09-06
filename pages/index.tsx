import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/system";
import type { NextPage } from "next";
import SimpleCard from "../components/cards/card";
import { useState } from "react";

const Home: NextPage = () => {
  const [places, setPlaces] = useState([]);

  return (
    <Container>
      <Grid2 container spacing={2}>
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </Grid2>
    </Container>
  );
};

export default Home;
