import React, { Component } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';


const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function Mmovietable(props) {
    const {
        state,
    } = props
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Movie Ranking</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Genre</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>On screen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.rows.map(row => (
            <TableRow key={row._id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.genre}</TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.onScreen}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}



export default class Movietable extends Component {

    state = {
        rows:[]
    }

    componentWillMount(){
        axios.get('/admin/getmovies')
        .then((res)=>this.setState({rows:res.data}))
        .catch(err=>console.log(err))
    }

    render() {
        return (
            <div>
                <Mmovietable
                state = {this.state}
                />
            </div>
        )
    }
}
