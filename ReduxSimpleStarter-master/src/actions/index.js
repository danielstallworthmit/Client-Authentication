import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:3090';
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';

export function signinUser({email, password}) {
    return function(dispatch) {
        // Submit email and pw to server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(res => {
                // If req good then update auth state
                dispatch({ type: AUTH_USER });
                // Save jwt token
                // redirect to the /feature route
                browserHistory.push('/feature');
            })
            .catch(() => {
                // Req bad -> show error to user
            })
    }
}