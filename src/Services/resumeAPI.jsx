import toast from "react-hot-toast";
import {setLoading} from '../Slices/loading'
import { apiConnector } from "./apiConnector"
import { resuemEndpoints } from './apis'

const {
    ADDRESUME_API,
    DELETERESUME_API,
    GETALLRESUME_API,
    CHANGENAME_API
} = resuemEndpoints

export function addResume(template,filename,resume, token) {
  return async (dispatch) => {
     dispatch(setLoading(true))
    try {
        
      const response = await apiConnector("POST", ADDRESUME_API, {template,filename,resume},{Authorization: `Bearer ${token}`,})
      console.log("ADDRESUME API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Resume Saved Succesfully")
    } catch (error) {
      console.log("ADDRESUME API ERROR............", error)
      toast.error("Could Not Save Resume")
    }
    dispatch(setLoading(false))
  }
}

export function changeResumeName(newName,resumeId,token) {
  return async (dispatch) => {
     dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", CHANGENAME_API, {newName,resumeId},{Authorization: `Bearer ${token}`,})
      console.log("CHANGENAME API RESPONSE............", response)
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Name Saved Succesfully")
    } catch (error) {
      console.log("CHANGENAME API ERROR............", error)
      toast.error("Could Not Change Name")
    }
    dispatch(setLoading(false))
  }
}
export function deleteResume(resumeId,token) {
    return async (dispatch) => {
       dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", DELETERESUME_API, {resumeId},{Authorization: `Bearer ${token}`,})
        console.log("DELETERESUME API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Resume Deleted Succesfully")
      } catch (error) {
        console.log("DELETERESUME API ERROR............", error)
        toast.error("Could Not delete Resume")
      }
      dispatch(setLoading(false))
    }
}

export function getAllResume(token) {
    return async (dispatch) => {
       dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", GETALLRESUME_API, {},{Authorization: `Bearer ${token}`,})
        console.log("GETALLRESUME API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        
        return response
      } catch (error) {
        console.log("GETALLRESUME API ERROR............", error)
        toast.error("Could Not Fetch Resume")
      }
      dispatch(setLoading(false))
    }
}