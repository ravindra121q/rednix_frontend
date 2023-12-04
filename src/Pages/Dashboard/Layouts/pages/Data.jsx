import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { BaseUrl } from "../../../../BaseUrl";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
export const Data = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${BaseUrl}/users/map-data`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Table Data</h1>
      <TableContainer
        responsive
        style={{ width: "95%", margin: "auto" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Vehicle Name</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0
              ? data.map((d) => (
                  <>
                    <TableRow
                      key={d.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {"Buses"}
                      </TableCell>
                      <TableCell align="right">{d.bus}</TableCell>
                    </TableRow>
                    <TableRow
                      key={d.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {"Cars"}
                      </TableCell>
                      <TableCell align="right">{d.car}</TableCell>
                    </TableRow>
                    <TableRow
                      key={d.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {"Trucks"}
                      </TableCell>
                      <TableCell align="right">{d.truck}</TableCell>
                    </TableRow>
                  </>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
