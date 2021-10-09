import React from 'react';
import { Container, Typography, Grid } from "@material-ui/core";
import {OurTeam} from './OurTeam';
const Team = () => {
 


    return (
        <>
         <Container>
        <Grid sx={12} sm={12} md={12} lg={12} xl={12} className="Team" >
          <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="h3" className="TeamHeading">
         Our Team Member
            </Typography>
          </Grid>

          <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
   {OurTeam.map((data,index)=>(
     
    <Grid item xs={12} sm={12} md={3} lg={3} xl={3} className='Cards'>
       <Typography className="memberCard">
       <img src={data.imageUrl} alt="Profile Avatar" className="empAvatar" />
                <Typography variant="h5" className="cardTitle">
                  <h1 className="profileName" >
              {data.memName}
          
                  </h1>
                </Typography>
                <Typography variant="h5" className="proffession">
               {data.Profession}
                </Typography>
                <Typography variant="body2" align="center" className="profileBio">
             {data.bio}
     
                </Typography>
              </Typography>
            </Grid>
     
   ))}

        
       
          </Grid>
        </Grid>
      </Container>
       </>
    )
}

export default Team;