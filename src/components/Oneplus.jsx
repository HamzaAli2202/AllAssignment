import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import CardItem from "./CardItem";

const Oneplus = () => {
  const [data, setData] = useState([]);
  console.log("data-=====", data);

  const getData = async () => {
    const result = await axios.get("http://localhost:1000/oneplus");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}></Grid>

      {data.map((item) => (
        <CardItem item={item} />
      ))}
    </Grid>
  );
};

export default Oneplus;
