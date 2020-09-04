import * as types from "../_types";

export const addItem = payload => {
  const obj = { type: types.ADD_ITEM, payload };
  return obj;
};

export const removeItem = payload => {
  const obj = { type: types.REMOVE_ITEM, payload };
  return obj;
};
