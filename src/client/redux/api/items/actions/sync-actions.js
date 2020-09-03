import * as types from "./action-types";

// getItems()
export const getItemsRequest = () => {
  return { type: types.GET_ITEMS_REQUEST };
};

export const getItemsSuccess = res => {
  const payload = res.items ? res.items : null;
  return { type: types.GET_ITEMS_SUCCESS, payload };
};

export const getItemsFailure = err => ({
  type: types.GET_ITEMS_FAILURE,
  payload: err,
  error: true
});

const actions = {
  getItemsRequest,
  getItemsSuccess,
  getItemsFailure
};

export default actions;
