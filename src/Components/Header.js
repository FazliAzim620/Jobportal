import React,{useState} from 'react';
import {Link} from "react-router-dom";
import { Container,  Typography, Grid, ListItem,  List, Divider,Drawer,} from "@material-ui/core";
import { Menu,Home,Work,Contacts,PermContactCalendar } from '@material-ui/icons';



const Header = () => {
  const [open,setOpen]=useState(false);
    return (
        <Container style={{width:'100%'}}>
      <Grid container sm={12} xs={12} md={12} lg={12} xl={12} className='Topbar'>
        
          <Grid item sm={12} xs={12} md={3} lg={3} xl={3}>
         
            <Typography className='BrandName' variant="h5"> 
            <Menu className='MenuIcon' onClick={()=>{
              setOpen(true)
            }} />
            Job Portal</Typography>
          </Grid>
          <Drawer open={open} onClose={()=>{
            setOpen(false)
          }}>
          <List className="DrawerList">
              <ListItem className=''><Link className='DrawerItem' to={'/profile'}><Home  className='drawerIcon'/>Home</Link></ListItem>
              <ListItem className=''><Link className='DrawerItem' to={'/job'}><Work  className='drawerIcon'/>JOBS</Link></ListItem>
              <ListItem className=''><Link className='DrawerItem' to={'/contact'}><Contacts  className='drawerIcon'/>CONTACTS</Link></ListItem>
              <ListItem className=''><Link className='DrawerItem' to={'/profile'}><PermContactCalendar  className='drawerIcon'/>drawerIcon</Link></ListItem>
          
            </List>
          </Drawer>
          <Grid item sm={12} xs={12} md={9} lg={9} xl={9} className="ListGrid">
            <List className="List" >
              <ListItem className='ListItem'><Link className='ListItem' to={'/profile'}>Home</Link></ListItem>
              <ListItem className='ListItem'><Link className='ListItem' to={'/job'}>JOBS</Link></ListItem>
              <ListItem className='ListItem dp'> <Link className='ListItem dp' to='/jobs'>DEPARTMENTAL CONTACTS</Link> </ListItem>
              <ListItem className='ListItem'><Link  className='ListItem'  to={'/profile'}>PROFILE</Link></ListItem>
             
            </List>
          </Grid>
        </Grid>
        <Divider></Divider>
      </Container>
    )
}

export default Header;
