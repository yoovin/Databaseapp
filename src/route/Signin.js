import React, { Component } from 'react';
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
      D9ta Structure
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  const classes = useStyles();
  const {state, handleIdChange, handleLogin, handlePwChange} = props

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="id"
            label="ID"
            name="id"
            autoComplete="id"
            value={state.id}
            onChange={handleIdChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={state.pw}
            onChange={handlePwChange}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default class Signin extends Component {

    state={
        id:'',
        pw:'',
        loginStatus:''
    }

    handleIdChange = (e) => {
        this.setState({id:e.target.value})
    }

    handlePwChange = (e) => {
        this.setState({pw:e.target.value})
    }

    handleLogin = (e) => {
        e.preventDefault()
        axios({
          method:'post',
          url:'/crew/login',
          data:{
              id:this.state.id,
              pw:this.state.pw
          }
      })
      .then(res =>{
          let {result} = res.data
          if(result === "success"){
            // Brawser Session에 저장
            window.sessionStorage.setItem('name', res.data.userInfo.name)
            window.sessionStorage.setItem('class', res.data.userInfo.class)
            window.sessionStorage.setItem('email', res.data.userInfo.email)
            window.sessionStorage.setItem('employId', res.data.userInfo.employId)
            window.sessionStorage.setItem('salary', res.data.userInfo.salary)
            window.sessionStorage.setItem('tel', res.data.userInfo.tel)
            window.sessionStorage.setItem('branchId', res.data.userInfo.branchId)
            if(res.data.userInfo.class === 'Admin'){
              this.props.history.push("/admin/financial")
            }else{
              this.props.history.push("/app/profile")
            }
          }else if(result === "password error"){
              this.setState({
                  loginStatus:"Password incorrect",
                  id:'',
                  pw:''
              })
              console.log(this.state)
          }else if(result === "id error"){
              this.setState({
                  loginStatus:"ID incorrect",
                  id:'',
                  pw:''
              })
              console.log(this.state)
          }
      })
  }

    render() {
        return (
            <div>
                <SignIn
                state={this.state}
                handleIdChange={this.handleIdChange}
                handlePwChange={this.handlePwChange}
                handleLogin={this.handleLogin}
                />
            </div>
        )
    }
}
