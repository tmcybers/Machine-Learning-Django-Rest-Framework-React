import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = {
    alert: null,

};

export default function alert(state=initialState, action) {
    const { type, payload } = action;

    switch (type) {

        default:
            return state;
    }
}