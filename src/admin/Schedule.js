import React, { Component } from 'react'
import axios from 'axios'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {InputGroup, FormControl, Button, Table} from 'react-bootstrap'

// Components
import { mainListItems} from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

import Reactcalendar from 'react-calendar';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 370,
  },
}));

function Sschedule(props) {
  const {
    handleChangeOn,
    handleChangeOff,
    handleChangeTitle,
    handleMovieInsert,
    onScreen,
    offScreen,
    movies,
    title
    } = props
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const day = ["일", "월", "화", "수", "목", "금", "토"]

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Schedule
          </Typography>
          <IconButton color="inherit">
              <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* onScreen */}
            <Grid item xs={6} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
              <Reactcalendar
                    onChange={handleChangeOn}
                    value={onScreen}
                    /><br/>
                    <span className="adminschedule">
                        개봉일 : {onScreen.getFullYear()}년 {onScreen.getMonth()+1}월 {onScreen.getDate()}일 {day[onScreen.getDay()]}요일
                    </span><br/>
              </Paper>
            </Grid>
            {/* offScreen */}
            <Grid item xs={6} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
              <Reactcalendar
                    onChange={handleChangeOff}
                    value={offScreen}
                    /><br/>
                    <span className="adminschedule">
                        폐봉일 : {offScreen.getFullYear()}년 {offScreen.getMonth()+1}월 {offScreen.getDate()}일 {day[onScreen.getDay()]}요일
                    </span><br/>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Movie title"
                aria-label="Movietitle"
                aria-describedby="basic-addon1"
                onChange={handleChangeTitle}
                value={title}
                />
                <Button variant="outline-secondary" onClick={handleMovieInsert}>Insert</Button>
            </InputGroup>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>On Screen</th>
                    <th>Title</th>
                    <th>Off Screen</th>
                    </tr>
                </thead>
                <tbody>
                    {movies ? movies.map(movie => {
                        let onScreenDate = new Date(movie.onScreen)
                        let offScreenDate = new Date(movie.offScreen)
                       return(
                        <tr>
                            <td>{onScreenDate.getFullYear()}년 {onScreenDate.getMonth()+1}월 {onScreenDate.getDate()}일 {day[onScreenDate.getDay()]}요일</td>
                            <td>{movie.title}</td>
                            <td>{offScreenDate.getFullYear()}년 {offScreenDate.getMonth()+1}월 {offScreenDate.getDate()}일 {day[offScreenDate.getDay()]}요일</td>
                        </tr>
                       ) 
                    }) :''}
                </tbody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default class Schedule extends Component {

    state = {
        onScreen:new Date(),
        offScreen:new Date(),
        title:"",
        movies:""
    }

    componentWillMount(){
        axios.get('/crew/getmovieschedule')
        .then((res)=>{
            console.log(res.data)
            this.setState({movies:res.data})
        })
        .catch(err=>console.log(err))
    }
    

    handleChangeOn = (date) => {
        this.setState({ onScreen:date })
    }
    handleChangeOff = (date) => {
        this.setState({ offScreen:date })
    }
    handleChangeTitle = (e) => {
        this.setState({title:e.target.value})
    }
    handleMovieInsert = () => {
        let onMili = Date.parse(this.state.onScreen)
        let offMili = Date.parse(this.state.offScreen)
        if(onMili <= offMili){
            axios({
                method:'post',
                url:'/post/addmovieschedule',
                data:{
                    title:this.state.title,
                    onScreen: onMili,
                    offScreen: offMili
                }
            })
            .then(res => {if(res.data.result === 1){
                axios.get('/crew/getmovieschedule')
                .then((res)=>{
                    console.log(res.data)
                    this.setState({movies:res.data, title:""})
                })
                .catch(err=>console.log(err))
            }})
            .catch(err => console.error(err))
        }else{
            alert("폐봉일은 개봉일보다 늦어야합니다!")
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Sschedule
                handleChangeOn = {this.handleChangeOn}
                handleChangeOff = {this.handleChangeOff}
                handleChangeTitle = {this.handleChangeTitle}
                handleMovieInsert = {this.handleMovieInsert}
                onScreen = {this.state.onScreen}
                offScreen = {this.state.offScreen}
                movies = {this.state.movies}
                title = {this.state.title}
                />
            </div>
        )
    }
}
