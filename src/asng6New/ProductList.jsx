import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Button } from "@mui/material";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [datacopy, setDatacopy] = useState([]);
  const [cate, setCate] = useState([]);
  const [sendCate, setsendCate] = useState([]);
  // console.log("sendcate====", sendCate);
  const getApi = async () => {
    const result = await axios.get("http://localhost:1002/product");
    const result2 = await axios.get("http://localhost:1002/category");

    setData(result.data);
    setDatacopy(result.data);
    setCate(result2.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    const filt = datacopy.filter((item) => item.category === sendCate);
    setData(filt);
  }, [sendCate]);
  return (
    <Grid container spacing={2}>
      {cate.map((item) => (
        <Grid item xs={3}>
          <Button
            onClick={() => setsendCate(item)}
            variant="contained"
            fullWidth
            color="warning"
          >
            {item}
          </Button>
        </Grid>
      ))}
      {data.map((item) => (
        <ProductItem item={item} />
      ))}
    </Grid>
  );
};
