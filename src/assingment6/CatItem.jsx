import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const CatItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Link to={item.path}>
        <Button variant="contained" fullWidth color="warning">
          {item.label}
        </Button>
      </Link>
    </Grid>
  );
};

export default CatItem;
