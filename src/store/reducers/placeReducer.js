import { FETCH_ADDRESSES_START, FETCH_ADDRESSES_SUCCESS, FETCH_ADDRESSES_FAILURE } from '../actions/placeActions';

const initialState = {
  addresses: [],
  loading: false,
  error: null,
};

export function placeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ADDRESSES_START:
      return { ...state, loading: true, error: null };
    case FETCH_ADDRESSES_SUCCESS:
      return { ...state, loading: false, addresses: action.payload };
    case FETCH_ADDRESSES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
  
export default placeReducer;
  