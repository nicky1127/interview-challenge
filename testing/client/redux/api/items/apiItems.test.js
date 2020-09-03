import { getItems } from 'client/redux/api/items/apiItems';
import { waitFor } from '@testing-library/react';
import * as actions from 'client/redux/api/items/actions/sync-actions';
import { configureStore } from 'client/redux/store';
import client from 'client/redux/api/Client';
jest.mock('client/redux/api/Client');
jest.mock('client/redux/api/items/actions/sync-actions', () => {
  const types = require('client/redux/api/items/actions/action-types');
  return {
    getItemsRequest: jest.fn(() => ({ type: types.GET_ITEMS_REQUEST })),
    getItemsSuccess: jest.fn(() => ({ type: types.GET_ITEMS_SUCCESS, payload: 'test' })),
    getItemsFailure: jest.fn(() => ({
      type: types.GET_ITEMS_FAILURE,
      payload: 'test',
      error: true
    }))
  };
});

beforeEach(() => {
  jest.clearAllMocks();
});

const mockStore = configureStore();

client._get = jest
  .fn()
  .mockResolvedValueOnce('Resolved')
  .mockResolvedValueOnce('Resolved')
  .mockRejectedValueOnce({ response: { data: { error: { message: 'error' } } } });

describe('apiItems.getItems', () => {
  it('getItemsRequest should be called when getItems gets called', () => {
    mockStore.dispatch(getItems());
    expect(actions.getItemsRequest).toHaveBeenCalled();
  });
  it('getItemsSuccess should be called when client gets resolved promise', async () => {
    mockStore.dispatch(getItems());
    await waitFor(() => expect(actions.getItemsSuccess).toHaveBeenCalled());
  });
  it('getItemsFailure should be called when client gets rejected promise', async () => {
    const spy = jest.spyOn(global.console, 'error').mockReturnValue();
    mockStore.dispatch(getItems());
    await waitFor(() => expect(actions.getItemsFailure).toHaveBeenCalled());
    spy.mockRestore();
  });
});
