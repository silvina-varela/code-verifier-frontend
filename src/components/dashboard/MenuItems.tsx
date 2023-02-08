import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StarsIcon from '@mui/icons-material/Stars';

export const MenuItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary='Katas'/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText primary='Users'/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <StarsIcon/>
            </ListItemIcon>
            <ListItemText primary='Ranking'/>
        </ListItemButton>
    </React.Fragment>
)