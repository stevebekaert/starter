import React, { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../styles/style.css';
import { BrowserRouter as Route, Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '70%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 150,
  },
});


function Contact() {
  const classes = useStyles();
  // const [flash, setFlash] = useState({});
  const [clients, setClients] = useState([]);
  useEffect(() => {
    getAll();
}, []);


  const getAll = async () => {
    const options = {
      method : 'GET',
    };
    const urlApi = 'http://localhost:5000/api/clients';
    await fetch(urlApi, options)
    .then(response => response.json())
    .then(response => {
      setClients(response);
    })
  }


    return (
      <div className="App-header">
        <h2 className="title-contact"> CONTACTS </h2>
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="simple table">

            <TableHead>
              <TableRow className="head-row">
                <TableCell align="center">Details</TableCell>
                <TableCell align="center">Firstname</TableCell>
                <TableCell align="center">Lastname</TableCell>
                <TableCell align="center">Email</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {clients.map((client, index) => (
                <TableRow key={index} className="rowSelected">
                  <TableCell align="center">
                    <Link to={`/clients/${client.id}/${client.firstname}/${client.lastname}/${client.email}`} >
                      Edit
                    </Link>
                  </TableCell>
                  <TableCell align="center">{client.firstname}</TableCell>
                  <TableCell align="center">{client.lastname}</TableCell>
                  <TableCell align="center">{client.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </Paper>

      </div>
    );
  }

export default Contact;

// {`/clients?id=${client.id}&firstname=${client.firstname}&lastname=${client.lastname}&email=${client.email}`}


// const deleteAll = () => {
//   const options = {
//     method : 'DELETE',
//   };
//   const urlApi = 'http://localhost:5000/api/clients';
//   fetch(urlApi, options)
//   .then(res  =>  res.json())
//   .then(
//       res  =>  setFlash(res.flash),
//       err  =>  setFlash(err.flash)
//   )
// }
