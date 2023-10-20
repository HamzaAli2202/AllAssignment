import React from "react";
import { Card, CardContent } from "@mui/material";
import Landing from "./components/Landing";
import "./components/common.css";
import Landing2 from "./assingment6/Landing2";

import { ProductList } from "./asng6New/ProductList";

function App() {
  return (
    <Card>
      <CardContent>
        {/* <Landing /> */}
        {/* <Landing2 /> */}
        <ProductList />
      </CardContent>
    </Card>
  );
}

export default App;
