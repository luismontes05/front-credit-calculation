export const reducer = (state, action) => {
    switch(action.type){
        case "SET_DATA_CLIENTS":
            return {
                ...state,
                dataClients: action.payload
            }
        default:
            return state
    }
};