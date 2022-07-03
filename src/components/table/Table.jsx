import React, { useEffect, useState } from 'react'
import "./table.scss"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SystemSourceService from '../../services/SystemSourceService';


const List = () => {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    getSources()
  }, [])
  
  const getSources = () => {
    SystemSourceService.getSources().then((response) => {
      setSources(response.data._embedded.sourceSystemList)
      console.log(response.data._embedded.sourceSystemList)
    });
  }
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
        </TableRow>
      </TableHead>
      <TableBody>
        {sources.map((row) => (
          <TableRow key={row.Test}>
            <TableCell className="tableCell">{row.languageCd}</TableCell>
          
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List