import { ActionType } from "../../models/models";
interface Action {
  type: ActionType;
  payload?: any;
}

export const alertReducer = (state: any, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.SET_ALERT:
      return payload;
    case ActionType.REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};
