import * as actions from 'client/redux/api/items/actions/sync-actions';
import * as types from 'client/redux/api/items/actions/action-types';

describe('actions - items ', () => {
  const payload = 'test';
  it('should create an action to make a api call to items', () => {
    const expectedAction = {
      type: types.GET_ITEMS_REQUEST
    };
    expect(actions.getItemsRequest()).toEqual(expectedAction);
  });
  it('should create an action to set the successful response of items api', () => {
    const expectedAction = {
      type: types.GET_ITEMS_SUCCESS,
      payload
    };
    expect(actions.getItemsSuccess(payload)).toEqual(expectedAction);
  });
  it('should create an action to set the failing response of items api', () => {
    const expectedAction = {
      type: types.GET_ITEMS_FAILURE,
      payload: 'test',
      error: true
    };
    expect(actions.getItemsFailure('test')).toEqual(expectedAction);
  });
});
