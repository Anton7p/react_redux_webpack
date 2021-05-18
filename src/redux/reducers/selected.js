import {checkUniqueObject} from "../../lib/checkUniqueObject";
import {removeFromArrayObject} from "../../lib/removeFromArrayObject";

const ADD_SELECTED ="ADD_SELECTED";
const REMOVE_SELECTED = "REMOVE_SELECTED";

let initialState = {
    selected: [],
}

const selectedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SELECTED:
            if (state.selected.length > 0 && checkUniqueObject(state.selected, action.payload)) {
                return state;
            }
            return {...state,...state.selected, selected: [...state.selected, action.payload]};

        case REMOVE_SELECTED:
            return {...state,...state.selected, selected: [...removeFromArrayObject(state.selected, action.payload)]};
        default: {
            return state;
        }
    }
};

export default selectedReducer;

export function addSelected(payload) {
    return {
        type: ADD_SELECTED,
        payload
    }
}

export function removeSelected(payload) {
    return {
        type: REMOVE_SELECTED,
        payload
    }
}

