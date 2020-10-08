import axios from 'axios';

// redux stuff
import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from './types';

// GET current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get('api/profile')
        .then(res => {
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        })

}

// Profile loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
}

// Clear Profile 
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
}