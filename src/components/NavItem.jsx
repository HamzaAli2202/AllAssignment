import React from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavItem = ({ item }) => {
  return (
    <Grid item xs={2.4}>
      <Link to={item.path}>
        <Button variant="contained" fullWidth color="warning">
          {item.label}
        </Button>
      </Link>
    </Grid>
  );
};

export default NavItem;
