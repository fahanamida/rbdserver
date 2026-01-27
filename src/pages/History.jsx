import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaBackward } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdDeleteSweep } from "react-icons/md";
import { fetchHistoryApi } from '../services/allApi';
import { deleteHistoryApi } from '../services/allApi';


function History() {
  const [historyData,SetHistoryData]=useState([])
  const [deleteStatus,setDeleteStatus] = useState(null)
  
  useEffect(()=>{
    getData()
  },[deleteStatus])

  

  const getData=async()=>{
    try{
      const res=await fetchHistoryApi()
      console.log(res)
      SetHistoryData(res.data)
    }
    catch(err){
      console.log(err)
    }
  }
   const handleDelete = async(id)=>{
    try{
    const res = await deleteHistoryApi(id)
    console.log(res)
    setDeleteStatus(res)
    }
    catch(err){
      console.log(err)
    }
    
   }
  return (
    <>
    <div className='container-fluid p-2'>
      <div className='container-fluid d-flex my-3 justify-content-center align-items-center'>
        <h3 className='text-center'><b>Resume Download history</b></h3>
        {/* back to instruction */}
        <Link className='btn btn-link' to={'/instruction'}>
          <FaBackward style={{fontSize:'30px', paddingLeft:'10px'}} className='text-primary my-3'/>
        </Link> 
      </div>
      <div className='row container-fluid'>
        <div className='col-md-4 d-flex hustify-content-evenly gap-3'>
          {
            historyData.length > 0 ?
            <>
            {
              historyData.map(item=>(
                <Box component="section" className='mt-5 border shadow' sx={{ p: 3 }}>
                  <div className='d-flex justify-content-evenly'>
                    <h6 className='text-center '>
                      Review at : <br />
                      {item?.timestamp}
                    </h6>
                    <button className='btn d-flex justify-content-end'>
                      <MdDeleteSweep style={{color:'red',fontSize:'40px'}} onClick={()=>handleDelete(item.id)} />
                    </button>
                  </div>
                  <div>
                    <img src={item?.imgUrl} width={'100%'} alt=''/>
                  </div>
                </Box>
              ))
            }
            </>
            :
            <h2 className="text-center text-danger">No History</h2>
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default History
