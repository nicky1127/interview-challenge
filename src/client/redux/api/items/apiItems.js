import client from "../Client";
import * as actions from "./actions/sync-actions";

const url = "/items";

/**
 * @param
 */
export const getItems = () => {
  return dispatch => {
    dispatch(actions.getItemsRequest());

    return client._get(url).then(
      res => {
        dispatch(actions.getItemsSuccess(res.data));
      },
      err => {
        console.error("apiItems.getItems: ", err.response);
        dispatch(actions.getItemsFailure(err));
      }
    );
  };
};
