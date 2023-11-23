import axios from 'axios';
import { readAllAddresses } from '../../firebase';

export const FETCH_ADDRESSES_START = 'FETCH_ADDRESSES_START';
export const FETCH_ADDRESSES_SUCCESS = 'FETCH_ADDRESSES_SUCCESS';
export const FETCH_ADDRESSES_FAILURE = 'FETCH_ADDRESSES_FAILURE';

export const fetchAddresses = () => async dispatch => {
  dispatch({ type: FETCH_ADDRESSES_START });

  try {
    const addresses = await readAllAddresses();
    dispatch({ type: FETCH_ADDRESSES_SUCCESS, payload: addresses });
  } catch (error) {
    dispatch({ type: FETCH_ADDRESSES_FAILURE, payload: error });
  }
}