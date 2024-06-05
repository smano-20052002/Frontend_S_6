import axios from "axios";
import {  FETCH_CONTENT_URL_REQUEST,fetchContentUrlSuccess,fetchContentUrlFailure } from "../../../action/Course/Material/FetchContentUrlAction";
//const API_URL = 'http://localhost:5199/lxp/course/';
 
const fetchContentUrlApi = ({ dispatch }) => (next) => async (action) => {
  next(action);
 
  if (action.type ===  FETCH_CONTENT_URL_REQUEST) {
    try {
      const response = await axios.get(`http://localhost:5199/lxp/course/material/${action.payload}`)
      
       console.log('API Response fetchcontenturlapi:', response.data); // Log the response data
      
        dispatch(fetchContentUrlSuccess(response.data.data));
        console.log("mytopicmiddleware_fetchcontenturlapi",response.data.data)
      
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchContentUrlFailure(error.message));
    }
  }
  return next(action)
};
export default fetchContentUrlApi;