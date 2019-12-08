import React, { Component } from 'react'
import axios from 'axios'
import {Dropdown, DropdownButton} from 'react-bootstrap'
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Components
import { mainListItems} from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

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
    height: 240,
  },
}));

function Ggoods(props) {
    const {
        state,
        handleCafeMonth,
        handleMainMonth
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
            Goods
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
            {/* Chart */}
            <Grid item xs={6} md={6} lg={6}>
            <DropdownButton id="dropdown-basic-button" title={state.cafeMonth}>
                <Dropdown.Item onClick={() => handleCafeMonth("2019.11")}>2019년 11월</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCafeMonth("2019.12")} >2019년 12월</Dropdown.Item>
            </DropdownButton><br/>
              <Paper className={classes.paper}>
              <Title>Cafeteria</Title>
                <Table size="small">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Count</TableCell>
                        <TableCell>Remain</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {state.cafe ? state.cafe.map(row => (
                        <TableRow key={row._id}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.count}</TableCell>
                        <TableCell>{row.remain}</TableCell>
                        </TableRow>
                    )):''}
                    </TableBody>
                </Table>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={6} md={6} lg={6}>
            <DropdownButton id="dropdown-basic-button" title={state.mainMonth}>
                <Dropdown.Item onClick={() => handleMainMonth("2019.11")}>2019년 11월</Dropdown.Item>
                <Dropdown.Item onClick={() => handleMainMonth("2019.12")} >2019년 12월</Dropdown.Item>
            </DropdownButton><br/>
              <Paper className={classes.paper}>
              <Title>Maintenance</Title>
                <Table size="small">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Count</TableCell>
                        <TableCell>Remain</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {state.main ? state.main.map(row => (
                        <TableRow key={row._id}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.count}</TableCell>
                        <TableCell>{row.remain}</TableCell>
                        </TableRow>
                    )
                    ):''}
                    </TableBody>
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

export default class Goods extends Component {

    state = {
        cafeMonth:"2019.11",
        mainMonth:"2019.11",
        main:"",
        cafe:""
    }

    componentWillMount(){
        axios.get("/admin/getcafes",{
            params:{
                month:this.state.cafeMonth
            }
        })
        .then(res => this.setState({cafe:res.data}))
        .catch(err => console.error(err))

        axios.get("/admin/getmains",{
            params:{
                month:this.state.mainMonth
            }
        })
        .then(res => this.setState({main:res.data}))
        .catch(err => console.error(err))
    }

    handleCafeMonth = (month) => {
        this.setState({cafeMonth:month})
        axios.get("/admin/getcafes",{
            params:{
                month:this.state.cafeMonth
            }
        })
        .then(res => this.setState({cafe:res.data}))
        .catch(err => console.error(err))
    }
    handleMainMonth = (month) => {
        this.setState({mainMonth:month})
        axios.get("/admin/getmains",{
            params:{
                month:this.state.mainMonth
            }
        })
        .then(res => this.setState({main:res.data}))
        .catch(err => console.error(err))
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Ggoods
                state = {this.state}
                getMainTable = {this.getMainTable}
                handleCafeMonth = {this.handleCafeMonth}
                handleMainMonth = {this.handleMainMonth}
                />
            </div>
        )
    }
}
