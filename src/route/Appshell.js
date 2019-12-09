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
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
        menu:'프로필'
    }

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
                            window.sessionStorage.clear()
                            this.props.history.push("/")
                        }}>
                            <ExitToAppIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.toggle} onBlur={this.handleDrawerToggle}>
                    <MenuItem onClick={() => {
                        this.setState({menu:'프로필'})
                        this.props.history.push('/app/profile')
                        }}><PersonOutlineRoundedIcon fontSize='large'/></MenuItem>
                    <MenuItem onClick={() => {
                        this.setState({menu:'급여'})
                        this.props.history.push("/app/salary")
                        }}><MonetizationOnOutlinedIcon fontSize='large'/></MenuItem>
                    <MenuItem onClick={() => {
                        this.setState({menu:'상영일정'})
                        this.props.history.push("/app/calendar")
                        }}><DateRangeIcon fontSize='large'/></MenuItem>
                    <MenuItem onClick={() =>{
                        this.setState({menu:'공지사항'})
                        this.props.history.push("/app/board")
                    }}>
                        <AssignmentIcon fontSize='large'/></MenuItem>
                    <MenuItem onClick={()=>{
                        this.setState({menu:'업무'})
                        this.props.history.push("/app/task")
                    }}>
                    <TransferWithinAStationIcon fontSize='large'/></MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default withStyles(styles)(Appshell)