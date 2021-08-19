import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE
} from "./constants";

const initialState = {
  isLoading: false,
  data: [],
  errorMessage: null,
  message: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
        data: [],
      };
      case DELETE_USER_START:
        return{
            ...state,
            isLoading: true,
        };
    case DELETE_USER_SUCCESS:
        return{
            ...state,
            isLoading: false,
            data: state.data.filter((user) => user.id !== parseInt(action.payload)), //aca hace el filtro para mostrar los usuarios sin el id borrado
        };
    case DELETE_USER_FAILURE:
        return{
            ...state,
            errorMessage: action.payload,
            isLoading: false,
            data: [],
        };

    case CREATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [ ...state.data, action.payload ]
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };
    

    default:
      return state;
  }
};
export default usersReducer;
