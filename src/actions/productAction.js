export const addProduct = (data) => dispatch => {
    dispatch({
        type: 'PRODUCT_ADD',
        payload: data
    })
}

export const getProducts = () => dispatch => {
    dispatch({
        type: 'PRODUCT_GET_ALL',
    })
}