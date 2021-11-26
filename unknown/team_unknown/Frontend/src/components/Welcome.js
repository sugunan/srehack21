import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    marginLeft:"70px",
    marginTop:"50px"
  },

  Welcome:{
    marginTop:"30px"
  }


});

export default function Welcome() {
  const classes = useStyles();
  return (
    <React.Fragment >
      <Typography color="Secondary" variant="h6" align="center" marginTop="30px" className={classes.Welcome}>
      
      </Typography>
      
    </React.Fragment>
  );
}