let lastId = 0;

export default function reducer(state = [],action){
    if (action.type === "bugAdded") {
        return [
            ...state,
        {
            id:lastId+=1,
            description : action.payload.description,
            resolved: false
        }

        ]
    }

    else if (action.type === "bugRemoved")
        return state.filter(bug => bug.id !== action.payload.id);
    return state;
}