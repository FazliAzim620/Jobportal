import React from 'react';
import { Container,  Typography, Grid, ListItem,  List, Divider } from "@material-ui/core";


const Footer = () => {
    return (
        <>
        <footer style={{width:'100%',backgroundColor:'teal'}} >
     <Container >
         <Grid container sm={12} xs={12} lg={12} md={12} xl={12} className='footer'>

                    <Grid item sm={6} xs={6} md={4} lg={4} xl={4}>
                                 <img src="logo.png" alt="Footer Logo" className='FooterLogo'/>
                    </Grid>
                    <Grid item sm={6} xs={6} md={8} lg={8} xl={8}>
                   <p className='footerright'> Plot No 101, I-8/4, Islamabad, Pakistan

© Copyright 2020 by National Employment Exchange Tool. All Rights Reserved.</p>
                    </Grid>
                  
             </Grid>
     </Container>
     </footer>
            
        </>
    )
}

export default Footer
