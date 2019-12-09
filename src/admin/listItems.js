import React from 'react';
import {Link} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'
// import ListSubheader from '@material-ui/core/ListSubheader';


import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MovieIcon from '@material-ui/icons/Movie';
import CreateIcon from '@material-ui/icons/Create';

export const mainListItems = (
  <div>
    <Link to="/admin/financial">
    <ListItem button>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Financial" />
    </ListItem>
    </Link>
    <Link to="/admin/schedule">
    <ListItem button>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="Schedule" />
    </ListItem>
    </Link>
    <Link to="/admin/crews">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Crews" />
    </ListItem>
    </Link>
    <Link to="/admin/board">
    <ListItem button>
      <ListItemIcon>
        <CreateIcon/>
      </ListItemIcon>
      <ListItemText primary="Board" />
    </ListItem>
    </Link>
    <Link to="/admin/goods">
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Goods" />
    </ListItem>
    </Link>
    <Link to="/admin/movie">
    <ListItem button>
      <ListItemIcon>
        <MovieIcon />
      </ListItemIcon>
      <ListItemText primary="Movie" />
    </ListItem>
    </Link>
  </div>
);