import { Container, Typography } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Picture} from './Assets/PicURL';



const MainSlider = () => {

    return (
        <>
        <Container>
<Carousel>
{Picture.map((item,ind)=>(
  <img key={ind} src={item.imageURL} alt='slider' className='carouselImg'/>
))}

</Carousel>
{/* <div className="CarouselText">
    <Typography variant="h5">Search & Apply Online on All Jobs</Typography>
    <div className="mainSerachSection">
        <input type="text" placeholder='Search' className='searchInput' />
        <select name="" id='Department'>
            <option value="" className='depOption'>Department</option>
            <option value="" className='depOption'>IT</option>
            <option value="" className='depOption'>Math</option>
            <option value="" className='depOption'>Civil</option>
        </select>
        <select name="" id="Province">
            <option value="">Province</option>
            <option value="">KP</option>
            <option value="">Punjab</option>
            <option value="">Sindh</option>
            <option value="">Baloch</option>
        </select>
      
    </div>
</div> */}
        </Container>
            
        </>
    )
}

export default MainSlider;
