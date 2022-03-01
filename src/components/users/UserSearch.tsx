import React, { useState, useContext } from "react";
import { GithubContext, AlertContext, searchUsers } from "../../context";
import { ActionType } from "../../models/models";

export const UserSearch = () => {
  const [text, setText] = useState("");

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (evt: React.SyntheticEvent) => {
    let target = evt.target as HTMLInputElement;
    setText(target.value);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!text) {
      setAlert("Please enter a search term", "error");
    } else {
      dispatch({ type: ActionType.SET_LOADING });
      const users = await searchUsers(text);
      dispatch({
        type: ActionType.GET_USERS,
        payload: users,
      });
      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="btn btn-lg absolute top-0 right-0 rounded-l-none"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            className="btn btn-ghost btn-lg"
            onClick={() => dispatch({ type: ActionType.CLEAR_USERS })}
          >
            Clear Users
          </button>
        </div>
      )}
    </div>
  );
};
