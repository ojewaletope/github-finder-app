import { useContext } from "react";
import { User } from "../../models/models";
import { UserItem } from ".";

import { GithubContext } from "../../context";

export const UserLists = () => {
  const { loading, users } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user: User) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <h3>Loading!!!</h3>;
  }
};
