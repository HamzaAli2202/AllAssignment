import React from "react";
import { Grid, Card, CardContent, Rating } from "@mui/material";

const ProductItem = ({ item }) => {
  return (
    <Grid sx={{ marginTop: 2 }} item xs={4}>
      <Card
        sx={{
          textAlign: "center",
          bgcolor: "black",
          boxShadow: "10px 10px 10px white ",
          borderRadius: "0 20px 0 20px",
        }}
      >
        <CardContent>
          <h1>{item.name}</h1>
          <img src={item.image} alt="" />

          <h4>Rs.{item.price}</h4>

          <h5>10%discount</h5>
          <Rating
            sx={{ borderRadius: "20px", bgcolor: "white" }}
            value={item.rating}
          ></Rating>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductItem;
