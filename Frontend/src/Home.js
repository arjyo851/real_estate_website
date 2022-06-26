//rfce
import * as React from 'react';
import {AppBar,Toolbar,Box,Typography,Button,IconButton,MenuIcon} from '@mui/material';
import { makeStyles } from '@mui/styles';
import city from './Assets/3319.jpg'
import './Home.css'
import Header from './Header'

const useStyles = makeStyles({
 
  cityImg:{
    width:'100%',
    height:'92vh',
  },
  overlayText:{
    position:'absolute',
    zIndex:'100',
    top:'100px',
    left:'20px',
    textAlign:'center',
  },
  homeText:{
    color:'white',
    fontWeight:'bolder',

  },
  homeBtn:{
    fontSize:'3.5rem',
    borderRadius:'15px',
    backgroundColor:'green!important',
    marginTop:'2rem!important',
    boxShadow:'3px 3px 3px white!important',
  }
});
export default function Home() {
    const classes = useStyles();
  return (
      <>
      
    <Box sx={{ flexGrow: 1 }}>
      <div style={{position:"relative"}}></div>
      <img src={city} alt="city" className={classes.cityImg}/>
      <div className={classes.overlayText}><Typography variant='h3' className={classes.homeText}>FIND YOUR NEXT PROPERTY ON MyOwnProperty WEBSITE</Typography>
      <Button variant='contained'  className={classes.homeBtn}>See All Property</Button>
      </div>
    </Box>
    <footer>
    {/* <a href="https://www.freepik.com/vectors/neon-city">Neon city vector created by vectorpocket - www.freepik.com</a> */}
    <a href='https://www.freepik.com/vectors/neon-city'>Neon city vector created by vectorpocket - www.freepik.com</a>
    </footer>
    </>
  );
}
