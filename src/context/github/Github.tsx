import React, { useReducer } from "react";

import { User, State } from "../../models/models";
import { githubReducer } from "..";

type ComponentProps = React.PropsWithChildren<{}>;

export const GithubContext = React.createContext<any>([]);

export const GithubProvider = ({ children }: ComponentProps) => {
  const initialState: State = {
    users: [],
    user: {} as User,
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
