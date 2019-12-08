import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'

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

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} 
            onSubmit={props.handleSignup}
            noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="employ ID"
                variant="outlined"
                required
                fullWidth
                id="employ ID"
                label="Employ ID"
                onChange={props.handleIdChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="branchid"
                label="Branch ID"
                name="branchid"
                onChange={props.handleBranchChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={props.handlePwChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={props.handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default class Signup extends Component {

  state = {
    id:'',
    pw:'',
    branch:'',
    email:''
  }

  handleIdChange = (e) => {
      this.setState({id:e.target.value})
    }

  handlePwChange = (e) => {
      this.setState({pw:e.target.value})
    }

  handleBranchChange = (e) =>{
      this.setState({branch:e.target.value})
    }

  handleEmailChange = (e) =>{
    this.setState({email:e.target.value})
    }

  handleSignup = (e) => {
      e.preventDefault()
      axios({
        method:'post',
        url:'/crew/register',
        data:{
            id:this.state.id,
            pw:this.state.pw,
            branch:this.state.branch,
            email:this.state.email
        }
    })
    .then(res => {
      if(res.data.result === 1){
        this.props.history.push("/")
      }else if(res.data.result === 0){
        console.log("Register Failed!")
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <SignUp
        state={this.state}
        handleIdChange={this.handleIdChange}
        handlePwChange={this.handlePwChange}
        handleBranchChange={this.handleBranchChange}
        handleEmailChange={this.handleEmailChange}
        handleSignup={this.handleSignup}
        />
      </div>
    )
  }
}
