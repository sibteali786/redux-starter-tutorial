import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from "./actionTypes";

let lastId = 0;

export default function reducer(state = [],action){
    if (action.type === BUG_ADDED) {
        return [
            ...state,
        {
            id:lastId+=1,
            description : action.payload.description,
            resolved: false
        }

        ]
    }

    else if (action.type === BUG_REMOVED)
        return state.filter(bug => bug.id !== action.payload.id);
    else if (action.type === BUG_RESOLVED)  // since bug resolved so we want to update existing object
        return state.map(bug => bug.id !== action.payload.id
             ? bug : {...bug, resolved:true})
    return state;
}