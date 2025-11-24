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

// update resume api
export const updateResumeAPI = async (id,resume) => {
  return await commonAPI(`${ServerURL}/resumes/${id}`, "PUT", resume);
};
 
// add history api
export const addHistoryAPI = async (history) => {
  return await commonAPI(`${ServerURL}/history`, "POST", history);
};

// get history api
export const getHistoryAPI = async () => {
  return await commonAPI(`${ServerURL}/history`, "GET", {});
};

// remove history api
export const removeHistoryAPI = async (id) => {
  return await commonAPI(`${ServerURL}/history/${id}`, "DELETE", {});
};
