import React from 'react'
import UserInput from '../components/UserInput'
import Preview from '../components/Preview'

function UserForm() {
    // create a state for storing resume details
    const [resumeDetails, setResumeDetails]= React.useState({
      username:"",
      jobTitle:"",
      location:"",
      email:"",
      mobileNumber:"",
      github:"",
      linkedin:"",
      portfolio:"",
      course:"",
      college:"",
      university:"",
      passoutYear:"",
      jobType:"",
    company:"",
    clocation:"",
    duration:"", 
    userSkills:[],
    summary:""
  })
  return (
    <div className='container'>
      <div className="row p-5">
        <div className="col-lg-6">
          <UserInput resumeDetails={resumeDetails} setResumeDetails={setResumeDetails}/>
        </div>
        <div className="col-lg-6">
          {
            resumeDetails.username &&
          <Preview resumeDetails={resumeDetails}/> 
          }
        </div>
      </div>
      
    </div>
  )
}

export default UserForm
