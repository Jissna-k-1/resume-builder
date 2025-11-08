import { Divider, Button } from '@mui/material'
import React from 'react'


function Preview() {
  return (
    <div style={{margin:'70px'}} className='shadow p-5 w-100 rounded text-center'>
      <h3>Name</h3>
      <h4>Job Title</h4>
      <h6><span className='mx-2'>Location</span>| <span className='mx-2'>E Mail</span>|<span className='mx-2'>Mobile</span></h6>
      <p>
        <a href="" target='_blank' >GITHUB</a> |
        <a href="" target='_blank' >LINKEDIN</a> |
        <a href="" target='_blank' >PORTFOLIO</a>

      </p>
      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In et maxime dolore numquam natus aperiam nostrum quae error totam animi dolor delectus repellendus ad reprehenderit vel consequuntur, dolorem illo. Aut!</p>
            <Divider sx={{fontSize:'25px'}}>Education</Divider>
            <h5 className='mt-2'>Course name</h5>
            <p><span className='mx-2'>College</span>|<span className='mx-2'>University</span>|<span className='mx-2'>PassOut Year</span></p>
            <Divider sx={{fontSize:'25px'}}>Professional Experience</Divider>
            <h5 className='mt-2'>Job / Internship</h5>
            <p><span className='mx-2'>Company name</span>|<span className='mx-2'>Company Location</span>|<span className='mx-2'>Duration</span></p>
            <Divider sx={{fontSize:'25px'}}>Skills</Divider>
          <div className="d-flex justify-content-between flex-wrap my-3">
            <Button variant="contained" className='m-1'>NODE JS</Button>
          </div>

    </div>
  )
}

export default Preview
