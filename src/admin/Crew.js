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
import {Button, Form, Row, Col} from 'react-bootstrap'

// Components
import { mainListItems} from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Creworders from './Creworders';
import Barchart from './Barchart'
import Title from './Title'

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
    height: 380,
  },
  fixedCrewsHeight:{
    height: 257,
  },
  fixedFormHeight:{
      height:75,
  }
}));

function Crewboard(props) {
    const {
        state,
        handleChangeTel,
        handleChangeName,
        handleChangeBranchId,
        handleChangeEmpId,
        handleFormSubmit 
    } = props
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const fixedCrewsPaper = clsx(classes.paper, classes.fixedCrewsHeight)
  const fixedFormPaper = clsx(classes.paper, classes.fixedFormHeight)

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
            Crews
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
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                {/* <Chart /> */}
                <Title>Present Crews Task</Title>
                <Barchart/>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            {/* <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid> */}
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={fixedCrewsPaper}>
                <Creworders />
              </Paper>
            </Grid>
            {state.newForm ? 
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedFormPaper}>
              <Form>
                <Row>
                    <Col>
                    <Form.Control value={state.employId} placeholder="Emp ID" onChange={handleChangeEmpId}/>
                    </Col>
                    <Col>
                    <Form.Control value={state.branchId} placeholder="Branch ID" onChange={handleChangeBranchId}/>
                    </Col>
                    <Col>
                    <Form.Control value={state.name} placeholder="Name" onChange={handleChangeName}/>
                    </Col>
                    <Col>
                    <Form.Control value={state.tel} placeholder="tel" onChange={handleChangeTel}/>
                    </Col>
                    <Col>
                    <Button variant="primary" onClick={handleFormSubmit}>Add Crew</Button>
                    </Col>
                </Row>
                </Form>
              </Paper>
            </Grid>
            :''}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default class Crew extends Component {

    state = {
        newForm:true,
        employId:"",
        branchId:"",
        name:"",
        tel:""
    }

    handleChangeEmpId = (e) => {
        this.setState({employId:e.target.value})
    }
    handleChangeBranchId = (e) => {
        this.setState({branchId:e.target.value})
    }
    handleChangeName = (e) => {
        this.setState({name:e.target.value})
    }
    handleChangeTel = (e) => {
        this.setState({tel:e.target.value})
    }
    handleFormSubmit = () => {
        axios({
            method:'post',
            url:'/post/crewinsert',
            data:{
                employId:this.state.employId,
                branchId:this.state.branchId,
                name:this.state.name,
                tel:this.state.tel
            }
        })
        .then(res => {
            if(res.data.result === 1){
                this.setState({
                    employId:"",
                    branchId:"",
                    name:"",
                    tel:""
                })
            }
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Crewboard
                handleChangeTel = {this.handleChangeTel}
                handleChangeName = {this.handleChangeName}
                handleChangeBranchId = {this.handleChangeBranchId}
                handleChangeEmpId = {this.handleChangeEmpId}
                handleFormSubmit = {this.handleFormSubmit}
                state = {this.state}
                />
            </div>
        )
    }
}
