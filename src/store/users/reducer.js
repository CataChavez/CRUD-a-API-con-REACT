import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,

} from "./constants";

const initialState = {
  isLoading: "iddle",
  data: [],
  errorMessage: null,
  message: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        isLoading: 'loading',
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: 'succeeded',
        data: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: 'failed',
        data: [],
      };
      case DELETE_USER_START:
        return{
            ...state,
            isLoading: 'loading',
        };
    case DELETE_USER_SUCCESS:
        return{
            ...state,
            isLoading: 'succeeded',
            data: state.data.filter((user) => user.id !== parseInt(action.payload)), //aca hace el filtro para mostrar los usuarios sin el id borrado
        };
    case DELETE_USER_FAILURE:
        return{
            ...state,
            errorMessage: action.payload,
            isLoading: 'failed',
            data: [],
        };

    case CREATE_USER_REQUEST:
      return {
        ...state,
        isLoading: 'loading',
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: 'succeeded',
        data: [ ...state.data, action.payload ]//el estado actual y la accion del nuevo payload
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: 'failed',
      };

    case UPDATE_USER_REQUEST:
      return {
        ...state,
        isLoading: 'loading',
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: 'succeeded',
        data: action.payload //solo trae el usuario, el payload es el arreglo de usuarios, lo produce las acciones
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: 'failed',
      };
    

    default:
      return state;
  }
};
export default usersReducer;
