import ServerURL from "./ServerURL"
import commonAPI from "./commonAPI"

// resume add api 
export const addResumeAPI = async (resume) => {
  return await commonAPI(`${ServerURL}/resumes`, "POST", resume);
};

// get resume api
export const getResumeAPI = async (id) => {
  return await commonAPI(`${ServerURL}/resumes/${id}`, "GET", {});
};
 