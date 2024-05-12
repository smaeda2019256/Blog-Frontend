import { USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/userConstant";
import axios from 'axios';
import { toast } from 'react-toastify';


export const userSignUpAction = (user) => async (dispatch) => {
    dispatch({type: USER_SIGNUP_REQUEST});
    try {
        const {data} = await axios.post('/api/signup', user)
        dispatch({ 
            type: USER_SIGNUP_SUCCESS, 
            payload: data 
        });
        toast.success("Register Successfully!!");
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}