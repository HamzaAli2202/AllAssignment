import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [datacopy, setcopyData] = useState([]);

  const getApi = async () => {
    const result = await axios.get("http://localhost:1002/product");
    setData(result.data);
  };
  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {}, []);
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <ProductItem item={item} />
      ))}
    </Grid>
  );
};

export default ProductList;
