import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { LinkContainer } from "react-router-bootstrap";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import CreateIcon from '@material-ui/icons/Create';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

export const mainListItems = (
  <div>
   <LinkContainer to="/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon color="secondary" />
        </ListItemIcon>
        <b>
          <ListItemText primary="Dashboard" color="secondary" />
        </b>
      </ListItem>
    </LinkContainer>
    <LinkContainer to="/incidents">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon color="secondary" />
        </ListItemIcon>
        <b>
          <ListItemText primary="Incidents" color="secondary" />
        </b>
      </ListItem>
    </LinkContainer>
    <LinkContainer to="/requests">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon color="secondary" />
        </ListItemIcon>
        <b>
          <ListItemText primary="Service Requests" color="secondary" />
        </b>
      </ListItem>
    </LinkContainer>
   
  
  </div>
);

