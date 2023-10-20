import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import axios from "axios";
import NavItem from "./NavItem";

const NavList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:1000/button");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Card sx={{ bgcolor: "darkblue" }}>
      <CardContent>
        <Grid container spacing={2}>
          {data.map((item) => (
            <NavItem item={item} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default NavList;
