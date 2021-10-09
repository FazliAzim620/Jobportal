import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";

import {Cards} from './Cards'

const SuccessJob = () => {
  return (
    <>
      <Container>
        <Grid sx={12} sm={12} md={12} lg={12} xl={12} className="JobContainer">
          <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="h3" className="JobTitle">
              Success Jobs
            </Typography>
          </Grid>

          <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
         {Cards.map((item,index)=>(
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3} className='MianCard'>
       <Typography className="card">
              
                <Typography variant="body2" className="carBody">
                  <span className="Availjobs">{item.jobs}</span>
                </Typography>
                <Typography variant="h6" align="center" className="cardText">
              {item.text}
                </Typography>
              </Typography>
            </Grid>
         ))}

        
       
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SuccessJob;
