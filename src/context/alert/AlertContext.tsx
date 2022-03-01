import React, { useReducer } from "react";

import { alertReducer } from ".";
import { ActionType } from "../../models/models";

type ComponentProps = React.PropsWithChildren<{}>;

export const AlertContext = React.createContext<any>(undefined);

export const AlertProvider = ({ children }: ComponentProps) => {
  const inititialState = null;

  const [state, dispatch] = useReducer(alertReducer, inititialState);

  const setAlert = (message: string, type: string) => {
    dispatch({ type: ActionType.SET_ALERT, payload: { message, type } });

    setTimeout(() => dispatch({ type: ActionType.REMOVE_ALERT }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
