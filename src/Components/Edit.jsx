import React, { useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { Link} from 'react-router-dom';
import { getResumeApi ,editResumeApi} from '../services/allApi';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow:'scroll',
  maxHeight:'80vh'
}

function Edit({resumeId,setEditData}) {
    const [open, setOpen] = React.useState(false);

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

        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        useEffect(()=>{
            handleEdit()
        },[])
        
        const nav=useNavigate

        const handleEdit = async()=>{
            try{
                const res = await getResumeApi(resumeId)
                console.log(res)
                if(res.status===200){
                    setUserInputs({...res.data})
                }
            }
            catch(err){
                console.log(err)
            }
        }

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
      const handleUpdate=async()=>{
        try{
          const res=await editResumeApi(resumeId,userInputs)
          console.log(res)
          if(res.status===200){
            handleClose()
            setEditData(res.data)
            Swal.fire({
              title: 'Success',
              text: 'Resume Update',
              icon: 'success',
              confirmButtonText: 'Ok'
              })
          }
          else{
            Swal.fire({
              title: 'warning!',
              text: 'Resume Update falied',
              icon: 'success',
              confirmButtonText: 'Ok'
              })
          }
        }
        catch(err){
          console.log(err)
          Swal.fire({
              title: 'error',
              text: 'Something went wrong',
              icon: 'error',
              confirmButtonText: 'Ok'
              })
        }
      }

    const suggestedskills=['React.js','Angular','Mongo DB','Node.js','Express.js', 'JavaScript','Python', 'Django','HTML','CSS','Bootstrap','Github'];

    return (
   <>
        <div>
            <button  className='btn' onClick={handleOpen}>
            <FaEdit style={{fontSize:'30px'}} className='text-primary'/>
            </button>      
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <>
                     <h3>Personal Details</h3>
                        <TextField id="standard-basic1" label="Full Name" value={userInputs?.personaldata?.fullname} onChange={(e)=>setUserInputs({...userInputs,personaldata:{...userInputs.personaldata,fullname:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                        <TextField id="standard-basic2" label="Job Title" value={userInputs?.personaldata?.jobtitle} onChange={(e)=>setUserInputs({...userInputs,personaldata:{...userInputs.personaldata,jobtitle:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                        <TextField id="standard-basic3" label="Location" value={userInputs?.personaldata?.location} onChange={(e)=>setUserInputs({...userInputs,personaldata:{...userInputs.personaldata,location:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                    </>

                    <>
                    <h3>Contact Details</h3>
                        <TextField id="standard-basic4" label="Email" value={userInputs?.contactdata?.email} onChange={(e)=>setUserInputs({...userInputs,contactdata:{...userInputs.contactdata,email:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                        <TextField id="standard-basic5" label="Phone Number" value={userInputs?.contactdata?.phone} onChange={(e)=>setUserInputs({...userInputs,contactdata:{...userInputs.contactdata,phone:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                        <TextField id="standard-basic6" label="GitHub Profile Link" value={userInputs?.contactdata?.github} onChange={(e)=>setUserInputs({...userInputs,contactdata:{...userInputs.contactdata,github:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                        <TextField id="standard-basic7" label="LinkedIn Profile Link" value={userInputs?.contactdata?.linkedin} onChange={(e)=>setUserInputs({...userInputs,contactdata:{...userInputs.contactdata,linkedin:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                        <TextField id="standard-basic8" label="Portfolio Profile Link" value={userInputs?.contactdata?.portfolio} onChange={(e)=>setUserInputs({...userInputs,contactdata:{...userInputs.contactdata,portfolio:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                    </>

                    <>
                    <h3>Educational Details</h3>
                        <TextField id="standard-basic9" label="Course Name" value={userInputs?.educationaldetails?.coursename} onChange={(e)=>setUserInputs({...userInputs,educationaldetails:{...userInputs.educationaldetails,coursename:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                        <TextField id="standard-basic10" label="College Name" value={userInputs?.educationaldetails?.collegename} onChange={(e)=>setUserInputs({...userInputs,educationaldetails:{...userInputs.educationaldetails,collegename:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                        <TextField id="standard-basic11" label="University" value={userInputs?.educationaldetails?.university} onChange={(e)=>setUserInputs({...userInputs,educationaldetails:{...userInputs.educationaldetails,university:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                        <TextField id="standard-basic12" label="Year of Passout" value={userInputs?.educationaldetails?.passoutyear} onChange={(e)=>setUserInputs({...userInputs,educationaldetails:{...userInputs.educationaldetails,passoutyear:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                    </>

                    <>
                    <h3>Professional Details</h3>
                        <TextField id="standard-basic13" label="Job or Internship" value={userInputs?.professionaldata?.jobtype} onChange={(e)=>setUserInputs({...userInputs,professionaldata:{...userInputs.professionaldata,jobtype:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                        <TextField id="standard-basic14" label="Company Name" value={userInputs?.professionaldata?.companyname} onChange={(e)=>setUserInputs({...userInputs,professionaldata:{...userInputs.professionaldata,companyname:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                        <TextField id="standard-basic15" label="Company Location" value={userInputs.professionaldata?.companylocation} onChange={(e)=>setUserInputs({...userInputs,professionaldata:{...userInputs.professionaldata,companylocation:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                        <TextField id="standard-basic16" label="Duration" value={userInputs?.professionaldata?.duration} onChange={(e)=>setUserInputs({...userInputs,professionaldata:{...userInputs.professionaldata,duration:e.target.value}})} variant="standard" sx={{width:'100%'}} />
                    </>

                    <>
                    <h3 className='mt-4 mb-0'>Skills</h3>
                          <input type="text" name="skills" id="sk" ref={skillInput} className='form-control w-75' />
                            <Button variant="contained" onClick={()=>{addSkills(skillInput.current.value)}} className='my-2'>ADD</Button>
                            <h4 className='mt-3'>Added Skills :</h4>
                            <div>
                                {
                                    userInputs.skills.length > 0 ?
                                    <div className='d-flex flex-wrap justify-content-start gap-2'>
                                    {
                                        userInputs.skills.map(item => (
                                        <span className='btn text-white me-3' style={{backgroundColor:'#2176ecff'}}>
                                        {item}<button className='btn-close btn' onClick={()=>{removeSkill(item)}}></button>
                                        </span>
                                        ))  
                                    }
                                    </div>
                                    :
                                    <h6>Nil</h6>
                                }
                            </div>
                    </>

                    <>
                    <h3>Professional Summary</h3>
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

                    <div className='w-100 text-center mt-3'>
                        <button className='btn btn-success' onClick={handleUpdate}>Update</button>
                    </div>
                </Box>
            </Modal>
    </div>
   </>
    )
}

export default Edit