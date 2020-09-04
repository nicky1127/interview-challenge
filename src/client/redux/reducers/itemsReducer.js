import * as types from "../api/items/actions/action-types";
import { ADD_ITEM, REMOVE_ITEM } from "../_types";

const initialState = {
  items: null,
  selectedItems: [],
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

  if (action.type === ADD_ITEM) {
    return {
      ...state,
      selectedItems: state.selectedItems.concat(action.payload)
    };
  }

  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      selectedItems: action.payload
    };
  }

  return state;
};

export default reducer;
