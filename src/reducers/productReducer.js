export default (state = [], action) => {
    switch (action.type) {
        case 'PRODUCT_ADD':
            {
                state.concat(action.payload);
                return [...state, action.payload];
            }
        case 'PRODUCT_GET_ALL':
            return [...state] ;
        default:
            return state
    }
}