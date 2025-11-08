import React from 'react'
import { Link } from 'react-router-dom'
import  {Box, Paper } from '@mui/material';
import { MdDelete } from 'react-icons/md';
import { IoArrowBackCircleSharp } from 'react-icons/io5';



function History() {
  return (
    <div>
      <h1 className='text-center my-5'>Downloaded Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{marginTop:'-80px'}}><IoArrowBackCircleSharp className='me-1'/>  Back</Link>
     <Box component="section" className='container-fluid'>
      <div className="row">
        <div className="col-md-4">
<Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
<div className="d-flex justify-content-between">
  <h6>Review At : 436574</h6>
  <button className='btn text-danger'><MdDelete/></button>
</div>
<div className="border rounded p-3">
  <img  height={'200px '}width={'200px'} src="https://marketplace.canva.com/EAGmJ13p8zE/1/0/1131w/canva-black-and-white-minimalist-professional-resume-a4-X9UHTVTOsqQ.jpg" alt="resume" />
</div>



</Paper>
        </div>
      </div>
      
    </Box>
    </div>
   

  )
}

export default History
