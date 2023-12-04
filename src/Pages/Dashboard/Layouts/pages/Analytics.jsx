import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import axios from "axios";
import { BaseUrl } from "../../../../BaseUrl";

const Analytics = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${BaseUrl}/users/map-data`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <Box style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      {data.length > 0 &&
        data.map((d) => {
          console.log(d);
          return (
            <BarChart
              xAxis={[
                {
                  id: "barCategories",
                  data: ["Buses", "Cars", "Trucks"],
                  scaleType: "band",
                },
              ]}
              series={[
                {
                  data: [d.bus, d.car, d.truck],
                },
              ]}
              width={800}
              height={400}
            />
          );
        })}
    </Box>
  );
};

export default Analytics;
