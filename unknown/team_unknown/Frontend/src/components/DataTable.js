import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import Button from '@material-ui/core/Button';
import Title from "./Title";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    align: "center",
  },

  title: {
    marginLeft: "5%",
    marginTop: "1%",
    align: "center",
  },

  tableHeder:{
    backgroundColor : "#d7d9db",
  },

  binStyles: {
    color: "red",
  },

  editStyles: {
    color: "darkblue",
  },
});


export default function DataTable() {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 

  return (
    <div>
       <Title className={classes.title} align="center">Email classification </Title>
      <TableContainer component={Paper}>
       
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.tableHeder}>
              <TableCell >ID</TableCell>
              <TableCell align="center">SENDER</TableCell>
              <TableCell align="center">CATEGORY</TableCell>
              <TableCell align="center">PRIORITY</TableCell>
              <TableCell align="center">STATUS</TableCell>
              <TableCell align="center">ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>         
                <TableRow >
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center">
                  <Button variant="outlined" color="secondary" size="small">Edit</Button> 
                  </TableCell>
                 
                </TableRow>
             
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        classname={classes.pagination}
        rowsPerPageOptions={[10,25,100]}
        component="div"
        // count={history.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
}
 
