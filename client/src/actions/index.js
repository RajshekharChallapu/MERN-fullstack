import axios from 'axios';
import {FETCH_USER} from './types';

//action creator function
const fetchUser = () => {
    return function (dispatch) {
        axios
            .get('/api/current_user')
            .then(res => dispatch({type: FETCH_USER, payload: res}));
    };

};