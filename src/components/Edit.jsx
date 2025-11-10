import React, { useState, useRef } from 'react'
import { MdEditDocument } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { FaXmark } from "react-icons/fa6";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit({resumeDetails,setResumeDetails}) {
    const [open,setOpen] = useState(false)
  const skillRef = useRef()

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const addSkill=(skill)=>{
  if(resumeDetails.userSkills.includes(skill)){
    alert("The given skill is already added, Please add another!!!")
  }else{
setResumeDetails({...resumeDetails,userSkills:[...resumeDetails.userSkills,skill]})
// to clear add skill text box
skillRef.current.value =""
}
}

const removeSkill=(skill)=>{
setResumeDetails({...resumeDetails,userSkills:resumeDetails.userSkills.filter(item=>item!=skill)})
}

  return (
    <div>
      <button onClick={handleOpen} className="btn fs-3 text-warning"><MdEditDocument /></button>
       <Modal
        open={open} 
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal data */}
             <div>
                        <h3>Personal Details</h3>
                        <div className=" row p-5">
                            <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                            <TextField value={resumeDetails.jobTitle} onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" />
                            <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
                        </div>
                    </div>
            {/* contact data */}
            <div>
                        <h3>Contact Details</h3>
                         <div className=" row p-5">
                            <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic-mail" label="E-mail" variant="standard" />
                            <TextField value={resumeDetails.mobileNumber} onChange={e=>setResumeDetails({...resumeDetails,mobileNumber:e.target.value})} id="standard-basic-mobile" label="Mobile Number" variant="standard" />
                            <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic-github" label="GITHUB Link" variant="standard" />
                            <TextField value={resumeDetails.linkedin} onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic-linkedIn" label="LinkedIn Link" variant="standard" />
                            <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                        
                        </div>
                    </div>
            {/* education data */}
            <div>
                        <h3>Educational Details</h3>
                         <div className=" row p-5">
                            <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" />
                            <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-college" label="College Name" variant="standard" />
                            <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University Name" variant="standard" />
                            <TextField value={resumeDetails.passoutYear} onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})} id="standard-basic-year" label="Year of Passout" variant="standard" />
                        
                        </div>
                    </div>
            {/* work experience */}
            <div>
                        <h3>Professioanl Details</h3>
                         <div className=" row p-5">
                            <TextField value={resumeDetails.jobType} onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})} id="standard-basic-jori" label="Job or Internship" variant="standard" />
                            <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic-company" label="Company Name" variant="standard" />
                            <TextField value={resumeDetails.clocation} onChange={e=>setResumeDetails({...resumeDetails,clocation:e.target.value})} id="standard-basic-clocation" label="Company Location" variant="standard" />
                            <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" />
                        
                        </div>
                    </div>
            {/* skills */}
         <div>
            <h3>Skills</h3>
            <div className="d-flex justify-content-between align-items-center p-3">
                <input ref={skillRef} placeholder='Add Skill' type="text" className="form-control" />
                  <Button onClick={()=>addSkill(skillRef.current.value)} variant='text' className='m-2'>ADD</Button>
            </div>
             
                  <h5>Added Skills :</h5>
                  <div className="d-flex justify-content-between flex-wrap my-3">
               {
                resumeDetails.userSkills?.length>0?
                resumeDetails.userSkills?.map((skill,index)=>(
                <Button key={index} variant="contained" className='m-1'>{skill}<FaXmark onClick={()=>removeSkill(skill)} className='ms-2 cursor-pointer'/></Button>

                ))
                :
                <p className='fw-bolder'>No Skills are added yet!!!</p>
               }
                                   


                  </div>
        </div>
            {/* summary */}
             <div>
                <h3>Professional Summary</h3>
                <div className="p-3 row">
                    <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="Write a short summary about yourself" variant="standard" multiline rows={6 } defaultValue={'Motivated and detail-oriented Computer Science graduate with strong foundations in programming, web development, and problem-solving. Eager to apply technical and analytical skills to build efficient software solutions and grow in a dynamic tech environment.'} />
                </div>
            </div>
            {/* button update */}
            <div className="text-start">
                <button className="btn btn-warning">Update</button>
            </div>
          </Box>
        </Box>
      </Modal>
      
    </div>
  )
}

export default Edit
