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
import ServerService from '../../services/ServerService';


const List = () => {
  const [registers, setRegisters] = useState([]);

  useEffect(() => {
    getRegisters()
  }, [])
  
  const getRegisters = () => {
    ServerService.get("/api/registry")
    .then((response)=> {
      console.log(response.data._embedded.resourceRegistryList)
      setRegisters(response.data._embedded.resourceRegistryList)
    })
    .catch(err=> {
      console.log(err.response)
    })}
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
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">Версия</TableCell>
          <TableCell className="tableCell">Доступная дата</TableCell>
          <TableCell className="tableCell">Код задания ресурса</TableCell>
          <TableCell className="tableCell">Статус</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {rows.map((row) => (
            <TableRow key={row.resourceId}>
              <TableCell className="tableCell">{row.resourceId}</TableCell>
              <TableCell className="tableCell">{row.versionId}</TableCell>
              <TableCell className="tableCell">{row.availableDttm}</TableCell>
              <TableCell className="tableCell">{row.processedByJobId}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.statusCd}`}>{row.statusCd}</span>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List