import React from "react";
import { Grid, Card, CardContent, Rating } from "@mui/material";

export const ProductItem = ({ item }) => {
  return (
    <Grid align="center" item xs={4}>
      <Card sx={{ bgcolor: "black", borderRadius: "25px 0 25px 0" }}>
        <CardContent>
          <h1>{item.category}</h1>
          <img src={item.image} alt="" />
          <h4>Rs.{item.price}</h4>
          <h5>10% Discount</h5>
          <Rating
            sx={{ borderRadius: 20, bgcolor: "white" }}
            value={item.rating}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};
