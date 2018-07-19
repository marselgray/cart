import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from './Types'
import axois from 'axios';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());  
  axois
    .get('/api/items')
    .then(res => dispatch({
        type: GET_ITEMS,
        payload: res.data
        })
    )
};

export const addItem = (item) => dispatch => {
    axois
        .post('/api/items', item)
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        })
    )
}

export const deleteItem = (id) => dispatch => {
    axois
    .delete(`/api/items/${id}`)
    .then(res => dispatch ({
        type: DELETE_ITEM,
        payload: id
    }))
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING,
        
    };
}