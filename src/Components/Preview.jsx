import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IoMdDownload } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import Edit from './Edit';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { addHistoryApi } from '../services/allApi';


function Preview({userInputs,finished,resumeId,setUserInputs}) {
  const[editData,setEditData]=React.useState({
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
  React.useEffect(()=>{
    editData!={} && setUserInputs(editData)
  },[editData])

  const handleDownload=async()=>{
    //taking screenshot of preview
    const input=document.getElementById("result")
    const canvas = await html2canvas (input,{scale:2})
    const imgUrl=canvas.toDataURL("image/png")
    console.log(imgUrl)

    //download screenshot as pdf
    const doc=new jsPDF();
    const pdfWidth=doc.internal.pageSize.getWidth()
    const pdfHeight=doc.internal.pageSize.getHeight()

    doc.addImage(imgUrl,"PNG",0,0,pdfWidth,pdfHeight)
    doc.save("resume.pdf")

    //get date
    const localTimeData=new Date()
    const timestamp = `${localTimeData.toLocaleDateString()}, ${localTimeData.toLocaleTimeString()}`

    //add history api call
    try{
      const res=await addHistoryApi({...userInputs,imgUrl,timestamp})
      if(res.status===200){
        console.log(res)
      }
      else{
        console.log(res)
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
  <>
    <Stack direction={'row'} sx={{justifyContent:'end',alignContent:'center'}}>
      {/* Download Button */}
      {
        finished &&
        <button className='btn'>
        <IoMdDownload onClick={handleDownload} style={{fontSize:'30px'}} className='text-primary'/>
      </button>
      }

      {/* Edit Button */}
      {
        finished && <Edit resumeId={resumeId} setEditData={setEditData}/>
      }

      {/* History Button */}
      {
        finished &&
        <Link className='btn' to={'/history'}>
        <FaHistory style={{fontSize:'30px'}} className='text-primary'/>
      </Link>
      }

      {/* Back to instructions */}
      <Link className='btn' to={'/instructions'}><IoMdArrowBack style={{fontSize:'30px'}} />Back</Link>
    </Stack>

    <Box component="section" className='mt-5' sx={{ p: 2}}>
      {
        userInputs?.personaldata?.fullname !="" &&
      
        <Paper id={'result'} elevation={3} sx={{paddingY:'20px',paddingX:'20px'}}>
            <h3 className='text-center'>{userInputs?.personaldata?.fullname}</h3>
            <h4 className='text-center'>{userInputs?.personaldata?.jobtitle}</h4>
            <p className='d-flex justify-content-center gap-2'>
              <span>{userInputs?.contactdata?.phone}</span>|
              <span>{userInputs?.contactdata?.email}</span>|
              <span>{userInputs?.personaldata?.location}</span>|
            </p>
            <p className='d-flex justify-content-center gap-2'>
                <span><a href={userInputs?.contactdata?.github}>{userInputs.contactdata?.github && 'GitHub Link'}</a></span>|
                <span><a href={userInputs?.contactdata?.linkedin}>{userInputs.contactdata?.linkedin && 'LinkedIn Link'}</a></span>|
                <span><a href={userInputs?.contactdata?.portfolio}>{userInputs.contactdata?.portfolio && 'Portfolio Link'}</a></span>
            </p>

             <Divider><b>SUMMARY</b></Divider>
              <div style={{textAlign:'justify'}} className='px-4'>
              {userInputs?.summary}
              </div>

             <Divider><b>EDUCATION</b></Divider>
             <h4 className='text-center'>{userInputs?.educationaldetails?.coursename}</h4>
             <p className='d-flex justify-content-center gap-2'>
                <span>{userInputs?.educationaldetails?.collegename}</span>|
                <span>{userInputs?.educationaldetails?.university}</span>|
                <span>{userInputs?.educationaldetails?.passoutyear}</span>
             </p>

             <Divider><b>PROFESSIONAL EXPERIENCE</b></Divider>
             <h4 className='text-center'>{userInputs?.professionaldata?.jobtype}</h4>
             <p className='d-flex justify-content-center gap-2'>
                <span>{userInputs?.professionaldata?.companyname}</span>|
                <span>{userInputs?.professionaldata?.companylocation}</span>|
                <span>{userInputs?.professionaldata?.duration}</span>
             </p>

             <Divider><b>SKILLS</b></Divider>
              <Stack spacing={2} direction="row" sx={{flexWrap:'wrap',gap:'2'}}>
                {
                  userInputs?.skills?.map(item => (
                    <Button variant="text">{item}</Button>
                  ))
                }
              </Stack>
        </Paper>
      }
    </Box>
  </>
  )
}

export default Preview