import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Grid } from "@mui/material";

const Maharashtra = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:4102/mh");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Card sx={{ bgcolor: "lightyellow" }}>
      <CardContent>
        <h1>Maharashtra Cities</h1>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item xs={4}>
              <Card sx={{ bgcolor: "#e65100" }}>
                <CardContent>
                  <h1 style={{ color: "white" }}>{item}</h1>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Maharashtra;
