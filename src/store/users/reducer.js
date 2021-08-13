import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
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
    case GET_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      }
    case GET_USER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
        data: [],
      }
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      }
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
        data: [],
      }
    

    default:
      return state;
  }
};
export default usersReducer;
