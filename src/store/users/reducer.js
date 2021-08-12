import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./constants";

const initialState = {
  isFetching: false,
  data: [],
  errorMessage: null,
  message: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
        data: [],
      };
    default:
      return state;
  }
};
export default usersReducer;
