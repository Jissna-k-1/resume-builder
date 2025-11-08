import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { FaXmark } from "react-icons/fa6";


const steps = ['Basic Informations', 'Contact Details', 'Educational Details', 'Work Experience', 'Skills & Certification', 'Review & Submit'];
function UserInput() {
    const skillSuggestionArray = ['NODE JS','MONGODB', 'EXPRESS JS','REACT', 'ANGULAR', 'LEADERSHIP', 'COMMUNICATION', 'COACHING','POWER BI','MS EXCEL']
   const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
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
  console.log(resumeDetails);
  

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderSteps =(stepCount)=>{
 switch(stepCount){
    case 0 : return (
        <div>
            <h3>Personal Details</h3>
            <div className=" row p-5">
                <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                <TextField value={resumeDetails.jobTitle} onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" />
                <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
            </div>
        </div>
    )
    case 1 : return (
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
    )
    case 2 : return (
        <div>
            <h3>Educational Details</h3>
             <div className=" row p-5">
                <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" />
                <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-college" label="College Name" variant="standard" />
                <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University Name" variant="standard" />
                <TextField value={resumeDetails.passoutYear} onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})} id="standard-basic-year" label="Year of Passout" variant="standard" />
            
            </div>
        </div>
    )
    case 3 : return (
        <div>
            <h3>Professioanl Details</h3>
             <div className=" row p-5">
                <TextField value={resumeDetails.jobType} onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})} id="standard-basic-jori" label="Job or Internship" variant="standard" />
                <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic-company" label="Company Name" variant="standard" />
                <TextField value={resumeDetails.clocation} onChange={e=>setResumeDetails({...resumeDetails,clocation:e.target.value})} id="standard-basic-clocation" label="Company Location" variant="standard" />
                <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" />
            
            </div>
        </div>
    )
    case 4 : return (
        <div>
            <h3>Skills</h3>
            <div className="d-flex justify-content-between align-items-center p-3">
                <input placeholder='Add Skill' type="text" className="form-control" />
                  <Button variant='text' className='m-2'>ADD</Button>
            </div>
              <h5>Suggestions</h5>
                  <div className="d-flex justify-content-between flex-wrap my-3">
                    {
                        skillSuggestionArray.map((item,index)=>(
                            <Button key={index} variant="outlined" className='m-2'>{item}</Button>
                        ))
                    }
                  </div>
                  <h5>Added Skills :</h5>
                  <div className="d-flex justify-content-between flex-wrap my-3">
                   <Button variant="contained" className='m-1'>NODE JS<FaXmark className='ms-2 cursor-pointer'/></Button>
                   


                  </div>
        </div>
    )
    case 5 : return (
        <div>
            <h3>Professional Summary</h3>
            <div className="p-3 row">
          <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="Write a short summary about yourself" variant="standard" multiline rows={6 } defaultValue={'Motivated and detail-oriented Computer Science graduate with strong foundations in programming, web development, and problem-solving. Eager to apply technical and analytical skills to build efficient software solutions and grow in a dynamic tech environment.'} />
  
            </div>
        </div>
    )
    default : return null 
 }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
{/* render contents according to step */}
<Box>
    {renderSteps(activeStep)}
</Box>


          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserInput
