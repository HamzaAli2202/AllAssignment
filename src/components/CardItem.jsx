import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

const CardItem = ({ item }) => {
  return (
    <Grid item xs={6}>
      <Card>
        <CardContent>
          <h1>{item.toUpperCase()}</h1>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardItem;
