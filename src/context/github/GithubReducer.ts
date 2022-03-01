import { ActionType, State } from "../../models/models";

interface Action {
  type: ActionType;
  payload?: any;
}

export const githubReducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case ActionType.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    case ActionType.GET_USER_DETAILS:
      return {
        ...state,
        user: payload.user,
        repos: payload.repos,
        loading: false,
      };

    default:
      return state;
  }
};
