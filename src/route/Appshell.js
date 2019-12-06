import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'
import { Toolbar } from '@material-ui/core';

// Icons
import MenuItem from '@material-ui/core/MenuItem';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';

// Routes

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 'auto'
    },
    title:{
        flexGrow:1,
    }
}

class Appshell extends Component {

    state = {
        toggle:false,
        menu:''
    }

    // copyright = () =>{
    //     return (
    //       <Typography variant="body2" color="textSecondary" align="center">
    //         {'Copyright © '}
    //         <span color="inherit">
    //           Your Website
    //         </span>{' '}
    //         {new Date().getFullYear()}
    //         {'.'}
    //       </Typography>
    //     );
    //   }

    handleDrawerToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <AppBar position="static"> 
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {this.state.menu}
                        </Typography>
                        <IconButton onClick={() => {
                            this.setState({menu:"Profile"})
                            this.props.history.push('/app/profile')
                        }}>
                            <PersonOutlineRoundedIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.toggle} onBlur={this.handleDrawerToggle}>
                    <MenuItem onClick={()=>{
                        this.setState({menu:'Home'})
                        this.props.history.push("/app/home")
                    }}><HomeIcon/></MenuItem>
                    <MenuItem onClick={() => {
                        this.setState({menu:'Sarary'})
                        this.props.history.push("/app/sarary")
                        }}><MonetizationOnOutlinedIcon/></MenuItem>
                    <MenuItem onClick={() => {
                        this.setState({menu:'Calendar'})
                        this.props.history.push("/app/calendar")
                        }}><DateRangeIcon/></MenuItem>
                    <MenuItem onClick={() =>{
                        this.setState({menu:'Board'})
                        this.props.history.push("/app/board")
                    }}>
                    <BorderColorIcon/></MenuItem>
                    <MenuItem onClick={()=>{
                        this.setState({menu:'Task'})
                        this.props.history.push("/app/task")
                    }}>
                    <TransferWithinAStationIcon/></MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default withStyles(styles)(Appshell)