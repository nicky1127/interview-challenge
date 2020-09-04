import * as types from "../_types";

export const itemRemover = store => next => action => {
  if (action.type === types.REMOVE_ITEM) {
    const { items } = store.getState();
    console.log("items");
  }
  return next(action);
};
