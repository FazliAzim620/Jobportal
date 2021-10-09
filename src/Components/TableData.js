import React from 'react';
import {Link} from "react-router-dom";
import {Container, Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Grid,Typography} from '@material-ui/core';


function createData(name, title, project, province, lastDate,btn) {
  return { name, title, project, province, lastDate,btn};
}

const rows = [
  createData('Punjab energy efficiency and conservation agency (PEECA)', 'Manager Compliance', '	PEECA', '	PUNJAB', '20-Sep-2021',<Link  to={'/profile'}>Home</Link>),
  createData('Federal Capital (ICT)', "ASSISTANT MANAGER QA & MONITORING", 'ICT', '	PUNJAB', '	20-Sep-2021 ',<Link to='/'>Ck</Link>),
  createData('KP Public Service Commission', 'ASSISTANT DIRECTOR (TAXATION)', 'TAXATION','KP','20-Sep-2021' ), ];
const TableData = () => {
    
    return (
        <>
 <Container>
 <Grid sx={12} sm={12} md={12} lg={12} xl={12}  className='datatable'>
<Typography variant='h5' align="center" className='tableHeading'>
Available Jobs

</Typography>
 
 <TableContainer className='tableContainer'>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow className='tableHead'>
            <TableCell className='tableCell cellHeading'>Department</TableCell>
            <TableCell className='tableCell cellHeading'>Job Title</TableCell>
            <TableCell className='tableCell cellHeading'>Project</TableCell>
            <TableCell className='tableCell cellHeading'>Province</TableCell>
            <TableCell className='tableCell cellHeading'>Last Date to Applay</TableCell>
            <TableCell className='tableCell cellHeading'> Applay</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  className='tableCell'component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell  className='tableCell'>{row.title}</TableCell>
              <TableCell  className='tableCell'>{row.project}</TableCell>
              <TableCell className='tableCell'>{row.province}</TableCell>
              <TableCell className='tableCell'>{row.lastDate}</TableCell>
              <TableCell className='tableCell'>{row.btn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
 </Container>
        </>
    )
}

export default TableData
