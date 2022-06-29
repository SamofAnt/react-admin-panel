import React, { useEffect } from 'react'
import "./table.scss"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Тест",
     
      customer: "Тест",
      date: "Тест",
      method: "Тест",
      status: "Тест",
    },
    {
      id: 2235235,
      product: "Тест",
      
      customer: "Тест",
      date: "Тест",
      method: "Тест",
      status: "Тест",
    },
    {
      id: 2342353,
      product: "Тест",
     
      customer: "Тест",
      date: "Тест",
      method: "Тест",
      status: "Тест",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell"> ID</TableCell>
          <TableCell className="tableCell">Тест</TableCell>
          <TableCell className="tableCell">Тест</TableCell>
          <TableCell className="tableCell">Тест</TableCell>
          <TableCell className="tableCell">Тест</TableCell>
          <TableCell className="tableCell">Тест</TableCell>
          <TableCell className="tableCell">Тест</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="tableCell">{row.id}</TableCell>
            <TableCell className="tableCell">
              <div className="cellWrapper">
                {row.product}
              </div>
            </TableCell>
            <TableCell className="tableCell">{row.customer}</TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.method}</TableCell>
            <TableCell className="tableCell">{row.method}</TableCell>
            <TableCell className="tableCell">
              <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List