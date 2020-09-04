import * as types from "../api/items/actions/action-types";

const initialState = {
  items: null,
  ldgItems: false,
  ldgSuccItems: false
};

const reducer = (state = initialState, action) => {
  if (action.type === types.GET_ITEMS_REQUEST) {
    return { ...state, ldgItems: true, ldgSuccItems: false };
  }

  if (action.type === types.GET_ITEMS_SUCCESS) {
    return {
      ...state,
      ldgItems: false,
      items: action.payload,
      ldgSuccItems: true
    };
  }

  if (action.type === types.GET_ITEMS_FAILURE) {
    return { ...state, ldgItems: false, ldgSuccItems: false };
  }

  return state;
};

export default reducer;
