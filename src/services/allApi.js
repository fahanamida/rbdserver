import baseUrl from "./baseUrl";
import commonApi from "./commonApi";

//add resume
export const addResumeApi=async(data)=>{
    
    return await commonApi("POST",`${baseUrl}/resumes`,data)
}

//edit resume

export const addHistoryApi=async(data)=>{
    
    return await commonApi("POST",`${baseUrl}/history`,data)
}

//view history
export const fetchHistoryApi=async()=>{
    
    return await commonApi("GET",`${baseUrl}/history`,{})
}

export const deleteHistoryApi = async(id)=>{
    return await commonApi("DELETE",`${baseUrl}/history/${id}`,{})
}
//get resume by id
export const getResumeApi=async(id)=>{
    return await commonApi("GET",`${baseUrl}/resumes/${id}`,{})
}
//edit resume
export const editResumeApi=async(id,data)=>{
    return await commonApi("PUT",`${baseUrl}/resumes/${id}`,data)
}