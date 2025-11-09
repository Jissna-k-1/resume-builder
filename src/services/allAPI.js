import ServerURL from "./ServerURL"
import commonAPI from "./commonAPI"

// resume add api
export const addResumeAPI = async (resume)=>{
    await commonAPI (`${ServerURL}/resumes`,"POST",resume)
}