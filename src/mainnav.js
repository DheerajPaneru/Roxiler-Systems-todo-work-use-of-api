import * as React from 'react';
import { makeStyles } from "@material-ui/core"
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@mui/icons-material/Restore';
import SearchIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { blueGrey } from '@mui/material/colors';
import {useNavigate} from 'react-router-dom'



const useStyles=makeStyles({
    root:{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor:blueGrey,
        zIndex: 100,
    
    },
    
    
    });
    

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const navigate =useNavigate();
  React.useEffect(()=>{
    if(value===0) navigate("/")
    else if(value===1) navigate("/movies");
    else if(value===2) navigate("/series");
    else if(value===3) navigate("/search");
    
  },[value])

  return (
    <Box sx={{}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);

        }}
        className={classes.root}
        style={{backgroundColor:"green"}}
      >
   <BottomNavigationAction style={{color:"black"}} label="Trend"
         icon={<WhatshotIcon/>}/>
        <BottomNavigationAction style={{color:"black"}} label="Movies" 
         icon={<MovieIcon />} />
         <BottomNavigationAction style={{color:"black"}} label="search"   
        icon={<SearchIcon />} />

      </BottomNavigation>
    </Box>
  );
}
