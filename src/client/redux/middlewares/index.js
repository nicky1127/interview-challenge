import * as types from "../_types";

//middleware to remove item from selected items
export const itemRemover = store => next => action => {
  if (action.type === types.REMOVE_ITEM) {
    const { selectedItems } = store.getState();
    const arr = [...selectedItems];
    arr.splice(action.payload, 1);
    action.payload = arr;
  }
  return next(action);
};
