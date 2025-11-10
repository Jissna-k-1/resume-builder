import React, { useEffect, useState } from 'react'

import Preview from "../components/Preview"
import { Link, useParams } from 'react-router-dom'
import { getResumeAPI } from '../services/allAPI';
import { FaDownload } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { IoArrowBackCircle } from "react-icons/io5";
import Edit from '../components/Edit';




function ViewResume() {
 const {id} = useParams()
//  console.log(id);
 
  const [resume,setResume] = useState({})

useEffect(()=>{
  getResumeDetails()
},[])

  const getResumeDetails = async ()=>{
const result = await getResumeAPI(id)
console.log(result);
if(result.status==200){
  setResume(result.data)
}

  }
  return (
    <>
     
      
        <div className="row container">
            <div className="col-md-2"></div>
        <div className="col-md-6 col-12">
          <div className="d-flex justify-content-center align-items-center mt-5">
        <button className="btn fs-4 text-primary"><FaDownload /></button>
        <Edit resumeDetails={resume} setResumeDetails={setResume} />
        <Link to={'/history'} className="btn fs-3 text-primary"><IoMdRefresh /></Link>
        <Link to={'/resume'} className="btn fs-4 text-success"><IoArrowBackCircle /></Link>



          </div>
            <Preview resumeDetails={resume}/>
        </div>
        <div className="col-md-2"></div>
        </div>
     
     
    </>
  )
}

export default ViewResume
