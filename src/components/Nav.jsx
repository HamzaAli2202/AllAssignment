import React, { useState } from "react";
import { Card, CardContent, Button, Grid } from "@mui/material";
import { navData } from "./navData";
import { Link } from "react-router-dom";

const Nav = () => {
  const [data, setData] = useState(navData);
  return (
    <Card sx={{ bgcolor: "green" }}>
      <CardContent>
        <Grid container spacing={2}>
          {data.map((item) => {
            return (
              <Grid item xs={3}>
                <Link to={item.path}>
                  <Button variant="contained" fullWidth color="warning">
                    {item.name}
                  </Button>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Nav;
