import React, { useState } from 'react'
import Steps from '../Components/Steps'
import Preview from '../Components/Preview'
import { Row , Col } from 'react-bootstrap'

function ResumeForm() {
  const [finished , setFinished] = useState(false)
   // State or input data collection
    const [userInputs,setUserInputs]=React.useState({
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
    const [resumeId,setResumeId]=useState(null)

  return (
    <>
    <div className='container-fluid py-3'>
      <Row>
        {
          !finished && 
        <Col sm={12} md={6}>
        <Steps userInputs={userInputs} setUserInputs={setUserInputs} setFinished={setFinished} finished={finished} setResumeId={setResumeId}/>
        </Col>
        }


        <Col sm={12} md={finished?12:6}>
        <Preview userInputs={userInputs}  setUserInputs={setUserInputs}  finished={finished} resumeId={resumeId}/>
        </Col>
      </Row>

    </div>
    </>
  )
}

export default ResumeForm