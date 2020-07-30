import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';
import { Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '80px'
  },
  menuButton: {
    display: 'none',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      display: 'inline-flex',
      border: 'none !important'
    },
  },
  title: {
    // flexGrow: 1,
    // display: 'none',
    [theme.breakpoints.up('sm')]: {
      // display: 'block',
    },
    '& a': {
      color: 'white',
      textDecoration: 'none'
    }
  },
  appBar: {
    backgroundColor: '#000c2d',
    '& h6': {
        fontFamily: 'segoe UI, "Roboto", "Helvetica", "Arial", sans-serif'
    }
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  navLink: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
    '& a': {
        marginRight: '15px',
        fontSize: '21px',
        textDecoration: 'none',
        color: 'white',
        '&:hover': {
          color: 'green'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '18px'
        }
    }
  },
  brand: {
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    '& img': {
        marginRight: '10px',
        width: '32px',
        height: '32px'
    }
  },
  navText: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inline'
    },
    
        marginRight: '15px',
        textDecoration: 'none',
        color: 'white',
        '&:hover': {
          color: 'orange'
        }
    
  },
  inputRoot: {
    color: 'inherit',
  },
  gutters: {
    paddingRight: '0px'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '15ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

export default function CustomAppBar() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState('')

  

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar} classes={{gutters: classes.gutters}}>
          
          <Typography className={classes.title} variant="h6" noWrap>
            
          <Link className={classes.brand} to="/"><img src="/gidara-logo.jpg" /><span style={{color: '#20dd85'}}>Gidara</span></Link>
          </Typography>
          
          <div className={classes.navLink}>
            <Link to="#">Companies</Link>
            <Link to="#">Teams</Link>
            <Link to="#">Resources</Link>
            <Link to="#">Programs</Link>
            <Link to="#">Blog</Link>
            <Link to="#">Contact</Link>
          </div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={()=>setOpenDrawer(true)}
          >
            <MenuIcon 
            // fontSize="large" 
              style={{fontSize: '1.9rem'}} 
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        setState={setOpenDrawer}
        state={openDrawer}
      />
    </div>
  );
}
