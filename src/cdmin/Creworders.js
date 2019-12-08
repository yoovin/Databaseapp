import React, { Component } from 'react'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function Creworder(props) {
    const {
        state
    } = props
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Crews</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Emp ID</TableCell>
            <TableCell>Branch ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Tel</TableCell>
            <TableCell>Task State</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {state.rows.map(row => (
            <TableRow key={row._id}>
              <TableCell>{row.employId}</TableCell>
              <TableCell>{row.branchId}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.tel}</TableCell>
              <TableCell>Off</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default class Creworders extends Component {

    state = {
        rows:[],
        
    }

    componentWillMount(){
        axios.get('/admin/getcrews')
        .then((res)=>{
            this.setState({rows:res.data})
        })
        .catch(err=>console.log(err))
    }

    render() {
        return (
            <div>
                <Creworder
                state = {this.state}
                />
            </div>
        )
    }
}
