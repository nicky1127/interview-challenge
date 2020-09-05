import * as types from "../_types";

//middleware to remove item from selected items
export const itemRemover = store => next => action => {
  if (action.type === types.REMOVE_ITEM) {
    const { selectedItemIDs } = store.getState();
    const arr = [...selectedItemIDs];
    arr.splice(action.payload, 1);
    action.payload = arr;
  }
  return next(action);
};
