import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { addResumeApi } from '../services/allApi';
import Swal from 'sweetalert2'

const steps = ['Basic Information', 'Contact Details', 'Education Details' ,'Work Experience','Skills & Certificates','Review & Submit'];

function Steps({userInputs,setUserInputs,setFinished,setResumeId}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const skillInput=React.useRef()

  console.log(userInputs)

const addSkills = (inputVal) => {
  if (inputVal) {
    if (userInputs.skills.includes(inputVal)){
      alert("Skill Already Added!")
    }
    else{
      // console.log(inputVal)
      setUserInputs({...userInputs,skills:[...userInputs.skills,inputVal]})
      skillInput.current.value=""
    }
  }
}
  const removeSkill=(skill)=>{
    setUserInputs({...userInputs,skills:userInputs.skills.filter(item=>item!=skill)})
  }
  const handleAddResume=async()=>{
    const {fullname,jobtitle,location}=userInputs.personaldata
    if(fullname && jobtitle && location){
      try{
          const res=await addResumeApi(userInputs)
          console.log(res)
          if(res?.status === 201){
            setFinished(true)
            setResumeId(res?.data.id)
            Swal.fire({
            title: 'Success!',
            text: 'Resume Added Successfully!',
            icon: 'success',
            confirmButtonText: 'Ok'
            })
          }
          else{
            Swal.fire({
            title: 'Success!',
            text: 'Resume Adding Failed!',
            icon: 'error',
            confirmButtonText: 'Ok'
            })
          }
      }
      catch(err){
        console.log(err)
        Swal.fire({
            title: 'Error!',
            text: 'Resume Added Failed..Something Went Wrong!',
            icon: 'error',
            confirmButtonText: 'Ok'
            })
      }
    }
    else{
      Swal.fire({
            title: 'Error!',
            text: 'Input Valid Data!',
            icon: 'error',
            confirmButtonText: 'Ok'
            })
    }
  }
  const suggestedskills=['React.js','Angular','Mongo DB','Node.js','Express.js', 'JavaScript','Python', 'Django','HTML','CSS','Bootstrap','Github'];
 
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
    setUserInputs({
      personaldata:{
        fullname:"",
        jobtitle:"",
        location:""
      },
      contactdata:{
        email:"",
        phone:"",
        github:"",
        linkedin:"",
        portfolio:""
      },
      educationaldetails:{
        coursename:"",
        collegename:"",
        university:"",
        passoutyear:""
      },
      professionaldata:{
        jobtype:"",
        companyname:"",
        companylocation:"",
        duration:""
      },
      skills:[],
      summary:""
    })

  };

  const inputStepForm = (step) => {
    switch (step){
      case 0 :
        return(
          <>
          <h2>Personal Details</h2>
              <TextField id="standard-basic1" label="Full Name" value={userInputs?.personaldata?.fullname} onChange={(e)=>setUserInputs({...userInputs,personaldata:{...userInputs.personaldata,fullname:e.target.value}})} variant="standard" sx={{width:'100%'}} />
              <TextField id="standard-basic2" label="Job Title" value={userInputs?.personaldata?.jobtitle} onChange={(e)=>setUserInputs({...userInputs,personaldata:{...userInputs.personaldata,jobtitle:e.target.value}})} variant="standard" sx={{width:'100%'}} />
              <TextField id="standard-basic3" label="Location" value={userInputs?.personaldata?.location} onChange={(e)=>setUserInputs({...userInputs,personaldata:{...userInputs.personaldata,location:e.target.value}})} variant="standard" sx={{width:'100%'}} />
          </>
        )
        case 1:
          return (
            <>
            <h2>Contact Details</h2>
              <TextField id="standard-basic4" label="Email" value={userInputs?.contactdata?.email} onChange={(e)=>setUserInputs({...userInputs,contactdata:{...userInputs.contactdata,email:e.target.value}})} variant="standard" sx={{width:'100%'}} />
              <TextField id="standard-basic5" label="Phone Number" value={userInputs?.contactdata?.phone} onChange={(e)=>setUserInputs({...userInputs,contactdata:{...userInputs.contactdata,phone:e.target.value}})} variant="standard" sx={{width:'100%'}} />
              <TextField id="standard-basic6" label="GitHub Profile Link" value={userInputs?.contactdata?.github} onChange={(e)=>setUserInputs({...userInputs,contactdata:{...userInputs.contactdata,github:e.target.value}})} variant="standard" sx={{width:'100%'}} />
              <TextField id="standard-basic7" label="LinkedIn Profile Link" value={userInputs?.contactdata?.linkedin} onChange={(e)=>setUserInputs({...userInputs,contactdata:{...userInputs.contactdata,linkedin:e.target.value}})} variant="standard" sx={{width:'100%'}} />
              <TextField id="standard-basic8" label="Portfolio Profile Link" value={userInputs?.contactdata?.portfolio} onChange={(e)=>setUserInputs({...userInputs,contactdata:{...userInputs.contactdata,portfolio:e.target.value}})} variant="standard" sx={{width:'100%'}} />
            </>
          )
          case 2:
          return (
            <>
            <h2>Educational Details</h2>
              <TextField id="standard-basic9" label="Course Name" value={userInputs?.educationaldetails?.coursename} onChange={(e)=>setUserInputs({...userInputs,educationaldetails:{...userInputs.educationaldetails,coursename:e.target.value}})} variant="standard" sx={{width:'100%'}} />
              <TextField id="standard-basic10" label="College Name" value={userInputs?.educationaldetails?.collegename} onChange={(e)=>setUserInputs({...userInputs,educationaldetails:{...userInputs.educationaldetails,collegename:e.target.value}})} variant="standard" sx={{width:'100%'}} />
              <TextField id="standard-basic11" label="University" value={userInputs?.educationaldetails?.university} onChange={(e)=>setUserInputs({...userInputs,educationaldetails:{...userInputs.educationaldetails,university:e.target.value}})} variant="standard" sx={{width:'100%'}} />
              <TextField id="standard-basic12" label="Year of Passout" value={userInputs?.educationaldetails?.passoutyear} onChange={(e)=>setUserInputs({...userInputs,educationaldetails:{...userInputs.educationaldetails,passoutyear:e.target.value}})} variant="standard" sx={{width:'100%'}} />
            </>
          )
          case 3:
          return (
            <>
            <h2>Professional Details</h2>
              <TextField id="standard-basic13" label="Job or Internship" value={userInputs?.professionaldata?.jobtype} onChange={(e)=>setUserInputs({...userInputs,professionaldata:{...userInputs.professionaldata,jobtype:e.target.value}})} variant="standard" sx={{width:'100%'}} />
              <TextField id="standard-basic14" label="Company Name" value={userInputs?.professionaldata?.companyname} onChange={(e)=>setUserInputs({...userInputs,professionaldata:{...userInputs.professionaldata,companyname:e.target.value}})} variant="standard" sx={{width:'100%'}} />
              <TextField id="standard-basic15" label="Company Location" value={userInputs?.professionaldata?.companylocation} onChange={(e)=>setUserInputs({...userInputs,professionaldata:{...userInputs.professionaldata,companylocation:e.target.value}})} variant="standard" sx={{width:'100%'}} />
              <TextField id="standard-basic16" label="Duration" value={userInputs?.professionaldata?.duration} onChange={(e)=>setUserInputs({...userInputs,professionaldata:{...userInputs.professionaldata,duration:e.target.value}})} variant="standard" sx={{width:'100%'}} />
            </>
          )
          case 4:
          return (
            <>
            <h2>Skills</h2>
            <input type="text" name="skills" id="sk" ref={skillInput} className='form-control w-75' />
              <Button variant="contained" onClick={()=>{addSkills(skillInput.current.value)}} className='my-2'>ADD</Button>
              <h4 className='mt-2 mb-3'>Suggestions</h4>
              <div className='d-flex justify-content-start flex-wrap gap-2'>
                {
                  suggestedskills.map(item =>(
                    <Button variant="outlined" onClick={()=>{addSkills(item)}} key={item}>{item}</Button>
                  ))
                }
              </div>
              <h4 className='mt-3'>Added Skills :</h4>
              <div>
                {
                  userInputs.skills.length > 0 ?
                  <div className='d-flex flex-wrap justify-content-start gap-2'>
                    {
                      userInputs.skills.map(item => {
                      return<span className='btn text-white me-3' style={{backgroundColor:'#2176ecff'}}>
                        {item}<button className='btn-close btn' onClick={()=>{removeSkill(item)}}></button>
                      </span>
                      })
                    }
                  </div>
                  :
                  <h6>Nil</h6>
                }
              </div>
              </>
          )
          case 5:
          return (
            <>
            <h2>Professional Summary</h2>
            <TextField sx={{width:'100%'}}
            id="standard-multiline-static"
            label="Write a brief summary of yourself"
            multiline
            rows={4}
            variant='standard'
            value={userInputs.summary}
            onChange={(e)=>setUserInputs({...userInputs,summary:e.target.value})}
            />
            </>
          )
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
          <Typography sx={{ mt: 2, mb: 1 }}>
            Step {activeStep + 1}
            {/*Step Based Input Forms */}
            <Box sx={{padding:'10px'}}>
              {inputStepForm(activeStep)}
            </Box>
            </Typography>
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
            {
            activeStep === steps.length - 1 ? 
              <Button onClick={handleAddResume}>
                Finish
              </Button>
              :
              <Button onClick={handleNext}>
                Next
              </Button>
            }
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Steps