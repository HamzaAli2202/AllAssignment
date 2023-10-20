import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import CatItem from "./CatItem";

const CatList = () => {
  const [data, setData] = useState([]);
  console.log("data======", data);

  const getApi = async () => {
    const result = await axios.get("http://localhost:1002/category");
    setData(result.data);
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <CatItem item={item} />
      ))}
    </Grid>
  );
};

export default CatList;
